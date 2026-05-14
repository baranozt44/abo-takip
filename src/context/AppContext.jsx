import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [tools, setTools] = useState(() => {
        try {
            const saved = localStorage.getItem("tech-track-data");
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error("LocalStorage yükleme hatası:", error);
            return [];
        }
    });

    const [editingTool, setEditingTool] = useState(null);

    useEffect(() => {
        localStorage.setItem("tech-track-data", JSON.stringify(tools));
    }, [tools]);

    // CRUD Metotları
    const addTool = (tool) => setTools([...tools, { ...tool, id: Date.now().toString() }]);

    const deleteTool = (id) => setTools(tools.filter(t => t.id !== id));

    const updateTool = (updatedTool) => {
        setTools(tools.map(t => t.id === updatedTool.id ? updatedTool : t));
        setEditingTool(null);
    };

    return (
        <AppContext.Provider value={{ 
            tools, 
            addTool, 
            deleteTool, 
            updateTool, 
            editingTool, 
            setEditingTool 
        }}>
            {children}
        </AppContext.Provider>
    );
};