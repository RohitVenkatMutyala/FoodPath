
import './Brain.css';
function Heart(){
    return(
        <div className="App">
        <header className="App-header">
          <h1>What's Good and Bad for Your Heart?</h1>
        </header>
  
        <section className="good-foods">
          <h2>Good for Your Heart</h2>
  
          <article className="food-item">
            <img 
              src="https://tse2.mm.bing.net/th/id/OIP.XJ0VwZaNBPPm8hJoGrEXEgHaEQ?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
              alt="Fatty Fish" 
              className="food-image"
            />
            <div className="food-content">
              <h3>1. Fatty Fish (Salmon, Mackerel, Sardines)</h3>
              <p><strong>Omega-3 Fatty Acids:</strong> Help reduce inflammation, lower triglycerides, and decrease the risk of arrhythmias.</p>
              <p><strong>Improves Cholesterol:</strong> Omega-3s increase HDL (good cholesterol) and reduce plaque buildup in arteries.</p>
              <p><strong>Blood Pressure Regulation:</strong> Regular consumption can reduce blood pressure, lowering the risk of stroke and heart attack.</p>
              <p><strong>Reduces Risk of Heart Failure:</strong> Omega-3s may lower the risk of heart failure by supporting overall heart function.</p>
            </div>
          </article>
      
          <article className="food-item">
            <img 
              src="https://www.bing.com/th?id=OIP.j1WfA-1HnuUuicubXhR1OwHaEq&w=315&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
              alt="Nuts" 
              className="food-image"
            />
            <div className="food-content">
              <h3>2. Nuts (Almonds, Walnuts)</h3>
              <p><strong>Rich in Healthy Fats:</strong> Contain monounsaturated and polyunsaturated fats, which lower LDL (bad cholesterol).</p>
              <p><strong>Antioxidants:</strong> Help reduce inflammation and improve the health of your blood vessels.</p>
              <p><strong>Plant Sterols:</strong> Compounds found in nuts that help lower cholesterol.</p>
              <p><strong>Magnesium Source:</strong> Supports healthy heart rhythms and prevents the hardening of arteries.</p>
            </div>
          </article>
  
          <article className="food-item">
            <img 
              src="https://th.bing.com/th?id=OIP.b9It-_1kiy-uxqOalKV1JwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
              alt="Oats" 
              className="food-image"
            />
            <div className="food-content">
              <h3>3. Oats</h3>
              <p><strong>High in Soluble Fiber:</strong> Soluble fiber reduces cholesterol absorption, lowering LDL cholesterol.</p>
              <p><strong>Beta-Glucan:</strong> Helps lower cholesterol levels, improving heart function.</p>
              <p><strong>Controls Blood Sugar:</strong> Oats prevent sharp rises in blood sugar, reducing the risk of heart disease.</p>
              <p><strong>Weight Management:</strong> The fiber in oats promotes weight management, aiding heart health.</p>
            </div>
          </article>
  
          <article className="food-item">
            <img 
              src="https://th.bing.com/th?id=OIP.Qmk7f6puo63EoqkKdIAP-QAAAA&w=300&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
              alt="Leafy Greens" 
              className="food-image"
            />
            <div className="food-content">
              <h3>4. Leafy Greens (Spinach, Kale)</h3>
              <p><strong>Rich in Potassium:</strong> Helps control blood pressure, reducing the strain on your heart.</p>
              <p><strong>Vitamin K:</strong> Promotes healthy blood clotting and prevents calcification of arteries.</p>
              <p><strong>Nitrates:</strong> Help reduce blood pressure and improve arterial function.</p>
              <p><strong>Antioxidants:</strong> Protect against oxidative stress, a key factor in heart disease development.</p>
            </div>
          </article>
        </section>
  
        <section className="bad-foods">
          <h2>Bad for Your Heart</h2>
  
          <article className="food-item">
            <img 
              src="https://tse1.mm.bing.net/th/id/OIP.CW22Grctx2l5DxNmU4wZ5gHaEn?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
              alt="Processed Meats" 
              className="food-image"
            />
            <div className="food-content">
              <h3>1. Processed Meats (Bacon, Sausage, Hot Dogs)</h3>
              <p><strong>High in Sodium:</strong> Increases blood pressure, leading to heart disease.</p>
              <p><strong>Saturated Fats:</strong> Promote plaque buildup in arteries, raising the risk of heart attacks.</p>
              <p><strong>Preservatives:</strong> Nitrates in processed meats are linked to heart disease and cancer.</p>
              <p><strong>Increases Inflammation:</strong> Triggers inflammation, contributing to heart disease.</p>
            </div>
          </article>
  
          <article className="food-item">
            <img 
              src="https://th.bing.com/th?id=OIP.cf8I0fDPz9qAxQkbpQxmhAHaLb&w=201&h=310&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
              alt="Sugary Beverages" 
              className="food-image"
            />
            <div className="food-content">
              <h3>2. Sugary Beverages (Soda, Energy Drinks)</h3>
              <p><strong>Increases Blood Sugar:</strong> Leads to weight gain and insulin resistance, increasing heart disease risk.</p>
              <p><strong>High Caloric Intake:</strong> Promotes obesity, a key risk factor for heart disease.</p>
              <p><strong>Increases Triglycerides:</strong> High sugar intake raises triglyceride levels, risking heart attacks.</p>
              <p><strong>Leads to Fatty Liver Disease:</strong> Excess sugar can lead to non-alcoholic fatty liver disease, linked to heart disease.</p>
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
              <p><strong>Trans Fats:</strong> Raise LDL cholesterol, increasing heart disease risk.</p>
              <p><strong>Leads to Inflammation:</strong> Unhealthy oils contribute to chronic inflammation, harming heart health.</p>
              <p><strong>Promotes Weight Gain:</strong> Calorie-dense fried foods contribute to obesity, increasing heart disease risk.</p>
              <p><strong>Increases Blood Pressure:</strong> High in salt and unhealthy fats, fried foods elevate blood pressure.</p>
            </div>
          </article>
        </section>
      </div>
    );

}
export default Heart;