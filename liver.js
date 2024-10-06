
import './Brain.css';
function Liver(){
    return(
        <div className="App">
        <header className="App-header">
          <h1>What's Good and Bad for Your Liver?</h1>
        </header>
  
        <section className="good-foods">
          <h2>Good for Your Liver</h2>
  
          <article className="food-item">
            <img
              src="https://th.bing.com/th?id=OIP.Qmk7f6puo63EoqkKdIAP-QAAAA&w=300&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Leafy Greens"
              className="food-image"
            />
            <div className="food-content">
              <h3>1. Leafy Greens (Spinach, Kale)</h3>
              <p><strong>Rich in Antioxidants:</strong> Leafy greens contain antioxidants that help reduce oxidative stress on the liver.</p>
              <p><strong>Detoxifying Properties:</strong> They help in cleansing the liver by neutralizing harmful substances.</p>
              <p><strong>Lowers Fat Levels:</strong> Consuming leafy greens regularly can reduce liver fat, which promotes better liver function.</p>
            </div>
          </article>
  
          <article className="food-item">
            <img
              src="https://th.bing.com/th?id=OIP.kyRLAQX3QkDh_mxgYYuAtgAAAA&w=277&h=225&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Green Tea"
              className="food-image"
            />
            <div className="food-content">
              <h3>2. Green Tea</h3>
              <p><strong>Contains Catechins:</strong> A type of antioxidant that boosts liver function and protects it from damage.</p>
              <p><strong>Improves Fat Metabolism:</strong> Green tea helps in reducing liver fat and supports its detoxification processes.</p>
              <p><strong>Protects Against Toxins:</strong> Regular consumption can protect the liver from the damage caused by toxins like alcohol.</p>
            </div>
          </article>
  
          <article className="food-item">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.XJ0VwZaNBPPm8hJoGrEXEgHaEQ?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Fatty Fish"
              className="food-image"
            />
            <div className="food-content">
              <h3>3. Fatty Fish (Salmon, Mackerel)</h3>
              <p><strong>Rich in Omega-3 Fatty Acids:</strong> Omega-3s reduce liver inflammation and lower the risk of fatty liver disease.</p>
              <p><strong>Reduces Liver Fat Accumulation:</strong> Omega-3s help balance the levels of liver fat, promoting better overall function.</p>
              <p><strong>Improves Enzyme Levels:</strong> Fatty fish can help regulate liver enzyme levels, enhancing liver health.</p>
            </div>
          </article>
        </section>
  
        <section className="bad-foods">
          <h2>Bad for Your Liver</h2>
  
          <article className="food-item">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.WFyvuU65H6puydI-H1yxwQHaGg?w=223&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Alcohol"
              className="food-image"
            />
            <div className="food-content">
              <h3>1. Alcohol</h3>
              <p><strong>Causes Liver Damage:</strong> Excessive alcohol intake can lead to liver inflammation and scarring, resulting in conditions like cirrhosis.</p>
              <p><strong>Disrupts Fat Metabolism:</strong> Alcohol interferes with the liver's ability to process fat, leading to fat buildup.</p>
              <p><strong>Promotes Liver Inflammation:</strong> Regular alcohol consumption can trigger inflammation and oxidative stress in the liver.</p>
            </div>
          </article>
  
          <article className="food-item">
            <img
              src="https://th.bing.com/th?id=OIP.cf8I0fDPz9qAxQkbpQxmhAHaLb&w=201&h=310&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Sugary Foods"
              className="food-image"
            />
            <div className="food-content">
              <h3>2. Sugary Foods (Candy, Soft Drinks)</h3>
              <p><strong>Leads to Fatty Liver:</strong> Excess sugar, particularly fructose, is converted into fat in the liver, leading to fatty liver disease.</p>
              <p><strong>Increases Inflammation:</strong> A diet high in sugar can cause inflammation, leading to liver damage.</p>
              <p><strong>Impairs Liver Function:</strong> Over time, high sugar intake reduces the liver’s ability to function effectively.</p>
            </div>
          </article>
  
          <article className="food-item">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.3B3kU6ZYJdDzN8b1jdeh6QHaFc?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Fried Foods"
              className="food-image"
            />
            <div className="food-content">
              <h3>3. Fried Foods (Fast Food, Chips)</h3>
              <p><strong>High in Trans Fats:</strong> Fried foods are often loaded with trans fats, which can lead to liver fat accumulation.</p>
              <p><strong>Causes Inflammation:</strong> Trans fats can trigger inflammation in the liver, leading to long-term damage.</p>
              <p><strong>Leads to Non-Alcoholic Fatty Liver Disease (NAFLD):</strong> Frequent consumption of fried foods can result in fat buildup and liver inflammation.</p>
            </div>
          </article>
        </section>
      </div>
    );
}
export default Liver;