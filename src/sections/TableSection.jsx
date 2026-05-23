const TableSection = () => {
  return (
    <section className="planet-table">
      <div className="table-text">
        <h2>Planetary Facts at a Glance</h2>
        <p>
          Below is a comparative table of major planets in our solar system. The
          data highlights key physical <br /> properties used by astronomers and
          researchers worldwide.
        </p>
      </div>
      <table>
        <caption>
          Data about the planets of our solar system (Planetary facts taken from
          NASA)
        </caption>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Mass (10 24kg)</th>
            <th>Diameter (km)</th>
            <th>Density (kg/m3)</th>
            <th>Gravity(m/s2)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="4" className="planet-data">
              Terrestrial Planets
            </td>
            <td>Mercury</td>
            <td>0.330</td>
            <td>4,879</td>
            <td>5,427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Venus</td>
            <td>4.87</td>
            <td>12,104</td>
            <td>5,243</td>
            <td>8.9</td>
          </tr>
          <tr>
            <td>Earth</td>
            <td>5.97</td>
            <td>12,756</td>
            <td>5,514</td>
            <td>9.8</td>
          </tr>
          <tr>
            <td>Mars</td>
            <td>0.642</td>
            <td>6,792</td>
            <td>3,933</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td rowSpan="2" className="planet-data">
              Gas Giants
            </td>
            <td>Jupiter</td>
            <td>1,898</td>
            <td>142,984</td>
            <td>1,326</td>
            <td>23.1</td>
          </tr>
          <tr>
            <td>Saturn</td>
            <td>568</td>
            <td>120,536</td>
            <td>687</td>
            <td>9.0</td>
          </tr>
          <tr>
            <td rowSpan="2" className="planet-data">
              Ice Giants
            </td>
            <td>Uranus</td>
            <td>86.8</td>
            <td>51,118</td>
            <td>1,271</td>
            <td>8.7</td>
          </tr>
          <tr>
            <td>Neptune</td>
            <td>102</td>
            <td>49,528</td>
            <td>1,638</td>
            <td>11.0</td>
          </tr>
          <tr>
            <td className="planet-data">Dwarf Planets</td>
            <td>Pluto</td>
            <td>0.0146</td>
            <td>2,370</td>
            <td>2,095</td>
            <td>0.7</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TableSection;
