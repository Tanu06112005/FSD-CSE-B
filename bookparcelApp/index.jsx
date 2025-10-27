import ReactDOM from 'react-dim/client';
function Book(){
    return (
        <div className="card">
        <img src="https://c8.alamy.com/comp/C0C112/front-cover-of-an-a-level-physics-textbook-C0C112.jpg" alt="book imagr" width="400" height="400" />
        <h3>Title: Physics</h3>
        <h4>Price: 550/-</h4>
        <button>Add to Cart</button>
        </div>
    );
}
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<Book/>);


