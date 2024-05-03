import React, { useEffect, useState } from "react";
import { StoreName, Second, Navbar } from "../";
import { Route, Routes } from "react-router-dom";
import { Main, CatalogProducts } from "../";
import { ApiService } from "../../service/api.service";

const App = () => {
  const [catalogs, setCatalogs] = useState([]);

  useEffect(() => {
    ApiService.fetching(`catalogs`)
      .then((data) => setCatalogs(data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="container-fluid p-0">
      <StoreName />
      <Second />
      <Navbar catalogs={catalogs} />
      <div className="background">
        <Routes>
          <Route path="/" element={<Main catalogs={catalogs} />}></Route>
          <Route path="/:id" element={<CatalogProducts />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
