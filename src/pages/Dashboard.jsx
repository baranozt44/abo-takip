import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Dashboard = () => {
    const { tools, deleteTool, setEditingTool } = useContext(AppContext);

    const totalMonthly = tools.reduce((acc, curr) => {
        const val = parseFloat(curr.price);
        return acc + (isNaN(val) ? 0 : val);
    }, 0);

    return (
        <div className="spacing-y">
            {/* Stats Grid */}
            <div className="stat-grid">
                <div className="card stat-card">
                    <p className="stat-label">Toplam Aylık</p>
                    <h2 className="stat-value">${totalMonthly.toFixed(2)}</h2>
                </div>
                <div className="card stat-card">
                    <p className="stat-label">Aktif Abonelik</p>
                    <h2 className="stat-value">{tools.length}</h2>
                </div>
            </div>

            {/* List Wrapper */}
            <div className="table-card">
                <div className="table-header">
                    <h3 className="font-semibold text-slate-200 text-sm">Aboneliklerim</h3>
                </div>
                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Araç</th>
                                <th>Kategori</th>
                                <th>Tarih</th>
                                <th>Fiyat</th>
                                <th className="text-right">İşlem</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tools.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="p-8 text-center text-slate-500 italic">
                                        Henüz bir araç eklenmedi.
                                    </td>
                                </tr>
                            ) : (
                                tools.map(tool => (
                                    <tr key={tool.id} className="group">
                                        <td className="font-medium text-slate-200">{tool.name}</td>
                                        <td>
                                            <span className="badge-category">
                                                {tool.category}
                                            </span>
                                        </td>
                                        <td className="text-slate-500 text-xs">
                                            {tool.date || '-'}
                                        </td>
                                        <td className="font-bold text-blue-400">${tool.price}</td>
                                        <td className="text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button 
                                                    onClick={() => setEditingTool(tool)} 
                                                    className="text-xs text-amber-500 hover:underline"
                                                >
                                                    Düzenle
                                                </button>
                                                <button 
                                                    onClick={() => deleteTool(tool.id)} 
                                                    className="text-xs text-red-500 hover:underline"
                                                >
                                                    Sil
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;