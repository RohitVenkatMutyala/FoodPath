
import './Brain.css';
function Lungs(){

       
  return (
    <div className="App">
      <header className="App-header">
        <h1>What's Good and Bad for Your Lungs?</h1>
      </header>

      <section className="good-foods">
        <h2>Good for Your Lungs</h2>

        <article className="food-item">
          <img
            src="https://th.bing.com/th?id=OIP.Qmk7f6puo63EoqkKdIAP-QAAAA&w=300&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="Leafy Greens"
            className="food-image"
          />
          <div className="food-content">
            <h3>1. Leafy Greens (Spinach, Kale)</h3>
            <p><strong>Rich in Antioxidants:</strong> Help protect lung tissue from damage caused by pollution and cigarette smoke.</p>
            <p><strong>Vitamin C and E:</strong> These vitamins support lung function by fighting oxidative stress.</p>
            <p><strong>Anti-inflammatory Properties:</strong> Reducing lung inflammation can improve respiratory health.</p>
          </div>
        </article>

        <article className="food-item">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.XJ0VwZaNBPPm8hJoGrEXEgHaEQ?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Fatty Fish"
            className="food-image"
          />
          <div className="food-content">
            <h3>2. Fatty Fish (Salmon, Sardines)</h3>
            <p><strong>Omega-3 Fatty Acids:</strong> Help reduce inflammation in the lungs, improving overall lung function.</p>
            <p><strong>Reduces Asthma Symptoms:</strong> Regular consumption of fatty fish can alleviate asthma symptoms.</p>
            <p><strong>Prevents Respiratory Illness:</strong> Omega-3s support lung health by reducing inflammation caused by respiratory diseases.</p>
          </div>
        </article>

        <article className="food-item">
          <img
            src="https://th.bing.com/th?id=OIP.XprgHSCfPgHBpfQBBfAWqwHaFb&w=292&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="Apples"
            className="food-image"
          />
          <div className="food-content">
            <h3>3. Apples</h3>
            <p><strong>High in Antioxidants:</strong> Help reduce the decline of lung function as people age.</p>
            <p><strong>Improves Respiratory Health:</strong> Regular consumption of apples has been linked to better overall lung function.</p>
            <p><strong>Quercetin:</strong> A flavonoid in apples that helps reduce oxidative damage to the lungs.</p>
          </div>
        </article>
      </section>

      <section className="bad-foods">
        <h2>Bad for Your Lungs</h2>

        <article className="food-item">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.CW22Grctx2l5DxNmU4wZ5gHaEn?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Processed Meats"
            className="food-image"
          />
          <div className="food-content">
            <h3>1. Processed Meats (Bacon, Sausage)</h3>
            <p><strong>Nitrites:</strong> Found in processed meats, can worsen lung health by increasing oxidative stress.</p>
            <p><strong>Linked to Chronic Obstructive Pulmonary Disease (COPD):</strong> Frequent consumption may increase the risk of developing COPD.</p>
            <p><strong>Promotes Inflammation:</strong> Processed meats contribute to inflammation, which can exacerbate lung conditions.</p>
          </div>
        </article>

        <article className="food-item">
          <img
            src="https://th.bing.com/th?id=OIP.cf8I0fDPz9qAxQkbpQxmhAHaLb&w=201&h=310&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="Sugary Drinks"
            className="food-image"
          />
          <div className="food-content">
            <h3>2. Sugary Beverages (Soda, Energy Drinks)</h3>
            <p><strong>Increases Inflammation:</strong> High sugar intake promotes systemic inflammation, negatively impacting lung function.</p>
            <p><strong>Risk of Asthma:</strong> Sugary drinks can worsen symptoms of asthma and increase the risk of respiratory diseases.</p>
            <p><strong>Obesity:</strong> Weight gain from sugary drinks can strain the lungs and lead to respiratory problems.</p>
          </div>
        </article>

        <article className="food-item">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.3B3kU6ZYJdDzN8b1jdeh6QHaFc?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Fried Foods"
            className="food-image"
          />
          <div className="food-content">
            <h3>3. Fried Foods (French Fries, Fried Chicken)</h3>
            <p><strong>Trans Fats:</strong> Increase inflammation in the lungs, worsening lung conditions.</p>
            <p><strong>Increases Risk of Lung Diseases:</strong> Fried foods can lead to inflammation and conditions like asthma.</p>
            <p><strong>Weight Gain:</strong> Obesity from high-calorie fried foods can make it harder for the lungs to function properly.</p>
          </div>
        </article>
      </section>
    </div>


    );
}
export default Lungs;