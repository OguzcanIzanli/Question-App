import "./Start.style.css";
import data from "../../data/questions";

// eslint-disable-next-line react/prop-types
const Start = ({ setStart }) => {
  return (
    <div className="startContainer">
      <div className="info">
        <h2>Bilgilendirme:</h2>
        <ul>
          <li>Bu test {data.length} sorudan oluşmaktadır.</li>
          <li>Her soru için 30sn süre verilir.</li>
          <li>Soru ekrana geldikten 10sn sonra cevap şıkları açılır.</li>
          <li>
            Cevap şıklarından biri tıklandıktan ya da 30sn tamamlandıktan sonra
            yeni soruya geçilecektir.
          </li>
          <li>Geçmiş sorulara dönülemeyecektir.</li>
        </ul>
      </div>
      <button id="start" onClick={() => setStart(true)}>
        Teste Başla
      </button>
    </div>
  );
};

export default Start;
