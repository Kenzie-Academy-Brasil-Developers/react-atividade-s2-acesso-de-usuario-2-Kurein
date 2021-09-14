import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import members from "../../components/Members";

function Company() {
  const params = useParams();
  const member = members.find((element) => element.id === params.id);

  return (
    <div>
      <h1>Detalhes da Empresa</h1>

      <p>Nome da empresa: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Company;
