
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const Agents = () => {
    const [agents, setAgent] = useState([]);
 
    useEffect(() => {
        getProducts();
    }, []);
 
    const getProducts = async () => {
        const response = await axios.get('https://localhost:3001/admin/agents');
        setAgent(response.data);
    }
 
    const deleteProduct = async (id) => {
        await axios.delete(`https://localhost:3001/admin/agents/${id}`);
        getProducts();
    }
 
    return (
        <div>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { agents.map((Agents, index) => (
                        <tr key={ agents.id }>
                            <td>{ index + 1 }</td>
                            <td>{ agents.first_name}</td>
                            <td>{ agents.email}</td>
                            <td>
                                <Link to={`/edit/${agents.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteProduct(agents.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default Agents

