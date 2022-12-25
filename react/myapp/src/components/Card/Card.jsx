import "./card.css";
export default function Card(props){
  const {name,age,skillStatus} = props;
  return (
    <>
      <div className="text-center mt-10 relative w-screen p-2 flex justify-center items-center rounded bg-gray-400">
        <div className="image w-24 h-24 m-5 overflow-hidden rounded-full bg-lime-400"></div>
        <div className="w-full bg-slate-600 rounded flex p-2 m-3 justify-center items-center flex-col relative">
          <div className="w-full bg-red-400 p-2 m-2 rounded">{name}</div>
          <div className="w-full bg-red-400 p-2 m-2 rounded">{age}</div>
          <div className="w-full bg-red-400 p-2 m-2 rounded">{skillStatus}</div>
        </div>
      </div>
    </>
    )
}
/*
const name = ["Jaber","Nymar","ronaldo","hahah"];

const [jaber, Nymar,ronaldo,hahah] = name;

👏👏👏👏
*/