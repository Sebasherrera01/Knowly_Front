import { Link } from "react-router-dom"

function Cursos() {
  const courses = [
    { name: 'Introducción a Python', price: '$49' },
    { name: 'React para principiantes', price: '$59' },
    { name: 'Desarrollo con Node.js', price: '$69' },
    { name: 'Python básico', price: '$39' },
    { name: 'Ciberseguridad esencial', price: '$79' },
  ];

  return (
    <div className="main text-black">
      <h2>Cursos</h2>

      <div className="Cards-container">
        {courses.map((c) => (
          <div key={c.name} className="Card">

            <div className="Card__img" />

            <h3 className="Card__title">{c.name}</h3>
            <p className="Card__price">{c.price}</p>

            <div className="flex justify-center mt-4">
              <Link to="/vista" className="Card__button">
                Ingresar
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Cursos;