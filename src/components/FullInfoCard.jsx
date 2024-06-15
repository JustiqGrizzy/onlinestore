import React from "react";

const FullInfoCard = ({ item }) => {
  return (
    <div className=" col-4 px-4">
      <div
        className="border-top border-bottom row py-4"
        style={{ marginTop: "30%" }}
      >
        <div className="col-6 my-auto">
          <p className="my-0">{item.type && "Type:"}</p>
          <p className="my-0">{item.connection && "Connection:"}</p>
          <p className="my-0">{item.cpu && "CPU type:"}</p>
          <p className="my-0">{item.cpuModel && "CPU model:"}</p>
          <p className="my-0">{item.memory && "Memory Installed:"}</p>
          <p className="my-0">{item.storage && "Storage Installed:"}</p>
          <p className="my-0">{item.graphics && "Graphics Card:"}</p>
          <p className="my-0">{item.displayType && "Display Type:"}</p>
          <p className="my-0">{item.displaySize && "Display Size:"}</p>
          <p className="my-0">{item.cameraFront && "Front Camera:"}</p>
          <p className="my-0">{item.cameraBack && "Back Camera:"}</p>
          <p className="my-0">{item.chargerType && "Charger Type:"}</p>
          <p className="my-0">{item.color && "Color:"}</p>
        </div>
        <div className="col-6 fw-bold my-auto">
          <p className="my-0">{item?.type}</p>
          <p className="my-0">{item?.connection}</p>
          <p className="my-0">{item?.cpu}</p>
          <p className="my-0">{item?.cpuModel}</p>
          <p className="my-0">{item?.memory}</p>
          <p className="my-0">{item?.storage}</p>
          <p className="my-0">{item?.graphics}</p>
          <p className="my-0">{item?.displayType}</p>
          <p className="my-0">{item?.displaySize}</p>
          <p className="my-0">{item?.cameraFront}</p>
          <p className="my-0">{item?.cameraBack}</p>
          <p className="my-0">{item?.chargerType}</p>
          <p className="my-0">{item?.color}</p>
        </div>
      </div>
    </div>
  );
};

export default FullInfoCard;
