
import './Brain.css';
function Stomach(){

        return (
            <div className="App">
              <header className="App-header">
                <h1>What's Good and Bad for Your Stomach?</h1>
              </header>
        
              <section className="good-foods">
                <h2>Good for Your Stomach</h2>
        
                <article className="food-item">
                  <img
                    src="https://www.bing.com/th?id=OIP.k1stYDeWBudlhWwKxCKZFwAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Yogurt"
                    className="food-image"
                  />
                  <div className="food-content">
                    <h3>1. Yogurt</h3>
                    <p><strong>Probiotics:</strong> Contains healthy bacteria that aid digestion and reduce bloating.</p>
                    <p><strong>Supports Gut Health:</strong> Helps balance the gut microbiome, improving overall stomach function.</p>
                    <p><strong>Reduces Inflammation:</strong> Can soothe stomach discomfort and reduce inflammation in the digestive tract.</p>
                  </div>
                </article>
        
                <article className="food-item">
                  <img
                    src="https://th.bing.com/th?id=OIP.2GnzkY2_WugcUUHZq7ovxgHaGS&w=271&h=230&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Ginger"
                    className="food-image"
                  />
                  <div className="food-content">
                    <h3>2. Ginger</h3>
                    <p><strong>Reduces Nausea:</strong> Helps alleviate nausea and vomiting caused by digestive issues.</p>
                    <p><strong>Anti-Inflammatory:</strong> Reduces inflammation in the stomach and promotes digestion.</p>
                    <p><strong>Soothes Upset Stomach:</strong> Ginger is known for its ability to calm an upset stomach and ease discomfort.</p>
                  </div>
                </article>
        
                <article className="food-item">
                  <img
                    src="https://www.bing.com/th?id=OIP.tqAWK8yGjpV-Fw2XJiCfhAHaGi&w=266&h=234&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Bananas"
                    className="food-image"
                  />
                  <div className="food-content">
                    <h3>3. Bananas</h3>
                    <p><strong>High in Fiber:</strong> Bananas help regulate bowel movements and prevent constipation.</p>
                    <p><strong>Eases Acid Reflux:</strong> Bananas are alkaline, which can neutralize stomach acid and reduce acid reflux.</p>
                    <p><strong>Gentle on the Stomach:</strong> Easy to digest and soothing for the digestive tract.</p>
                  </div>
                </article>
              </section>
        
              <section className="bad-foods">
                <h2>Bad for Your Stomach</h2>
        
                <article className="food-item">
                  <img
                    src="https://th.bing.com/th?id=OIP.v9JWr6ustsxI7iiI7OFPswHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Spicy Foods"
                    className="food-image"
                  />
                  <div className="food-content">
                    <h3>1. Spicy Foods</h3>
                    <p><strong>Increases Stomach Acid:</strong> Can irritate the stomach lining and lead to indigestion or heartburn.</p>
                    <p><strong>Triggers Acid Reflux:</strong> Spicy foods can cause the lower esophageal sphincter to relax, leading to acid reflux.</p>
                    <p><strong>Causes Stomach Discomfort:</strong> Spicy foods may cause discomfort, bloating, or gas for sensitive individuals.</p>
                  </div>
                </article>
        
                <article className="food-item">
                  <img
                    src="https://tse1.mm.bing.net/th/id/OIP.3B3kU6ZYJdDzN8b1jdeh6QHaFc?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Fried Foods"
                    className="food-image"
                  />
                  <div className="food-content">
                    <h3>2. Fried Foods</h3>
                    <p><strong>Hard to Digest:</strong> High-fat content in fried foods slows digestion and can cause stomach discomfort.</p>
                    <p><strong>Increases Acid Production:</strong> Fried foods can lead to excessive stomach acid, causing indigestion or acid reflux.</p>
                    <p><strong>Leads to Bloating:</strong> Greasy foods can cause bloating and gas, making the stomach feel heavy.</p>
                  </div>
                </article>
        
                <article className="food-item">
                  <img
                    src="https://th.bing.com/th?id=OIP.IUPD-jZqMJ9JH_6JJL-0jgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Carbonated Beverages"
                    className="food-image"
                  />
                  <div className="food-content">
                    <h3>3. Carbonated Beverages (Soda, Sparkling Water)</h3>
                    <p><strong>Causes Bloating:</strong> The gas in carbonated drinks can cause bloating and discomfort in the stomach.</p>
                    <p><strong>Triggers Acid Reflux:</strong> Carbonation can lead to acid reflux and exacerbate heartburn.</p>
                    <p><strong>Disrupts Digestion:</strong> These beverages can slow digestion, leading to gas and stomach pain.</p>
                  </div>
                </article>
              </section>
            </div>
    );
}
export default Stomach;