import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ ad: "", soyad: "", yas: 0 });

  const handleChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <form>
        <div>
          <label htmlFor="ad">Ad</label>
          <input
            name="ad"
            id="ad"
            type="text"
            value={formData.ad}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="soyad">Soyad</label>
          <input
            name="soyad"
            id="soyad"
            type="text"
            value={formData.soyad}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="yas">Yas</label>
          <input
            name="yas"
            id="yas"
            type="number"
            value={formData.yas}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
