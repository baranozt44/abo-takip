import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { createInitialTool, CATEGORY_OPTIONS } from '../interfaces/ToolSchema';

const ToolForm = () => {
    const { addTool, updateTool, editingTool, setEditingTool } = useContext(AppContext);
    const [formData, setFormData] = useState(createInitialTool());

    // Düzenleme moduna geçildiğinde formu doldur
    useEffect(() => {
        if (editingTool) {
            setFormData(editingTool);
        } else {
            setFormData(createInitialTool());
        }
    }, [editingTool]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.price || !formData.date) return alert("Lütfen tüm alanları doldurun!");
        
        if (editingTool) {
            updateTool(formData);
        } else {
            addTool(formData);
        }
        
        setFormData(createInitialTool());
    };

    const handleCancel = () => {
        setEditingTool(null);
        setFormData(createInitialTool());
    };

    return (
        <form onSubmit={handleSubmit} className="card form-stack">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                    {editingTool ? 'Aboneliği Düzenle' : 'Yeni Abonelik'}
                </h3>
                {editingTool && (
                    <button type="button" onClick={handleCancel} className="text-xs text-red-400 hover:underline">
                        İptal Et
                    </button>
                )}
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="label-text">Araç Adı</label>
                    <input
                        type="text"
                        placeholder="Örn: Netflix, Spotify"
                        className="input-field"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                
                <div className="form-group">
                    <label className="label-text">Kategori</label>
                    <select
                        className="input-field"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                        {CATEGORY_OPTIONS.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="label-text">Aylık Ücret ($)</label>
                    <input
                        type="number"
                        placeholder="0.00"
                        className="input-field"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label className="label-text">Abonelik Tarihi</label>
                    <input
                        type="date"
                        className="input-field"
                        style={{ colorScheme: 'dark' }}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                </div>
            </div>

            <button type="submit" className={`btn-primary ${editingTool ? 'bg-amber-600 hover:bg-amber-500 shadow-amber-900/20' : ''}`}>
                {editingTool ? 'Değişiklikleri Kaydet' : 'Aboneliği Kaydet'}
            </button>
        </form>
    );
};

export default ToolForm;