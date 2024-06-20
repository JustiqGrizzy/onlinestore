import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import ProductService from "../service/product";
import { PriceCard, FullInfoCard } from "./";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsStart, getAllProductsSucces } from "../slice/product";
import { Loader } from "../ui";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const ProductDetails = () => {
  const { allProducts, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllProductsStart());
    ProductService.getAllProducts()
      .then((data) => dispatch(getAllProductsSucces(data)))
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 400,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="container-lg pt-3">
      {allProducts.map(
        (item) =>
          item.id == id && (
            <div key={item.id}>
              <div className="d-flex border-bottom" style={{ height: "8vh" }}>
                <div>
                  <h3>
                    {item?.name} {item?.brand} {item?.model}
                  </h3>
                  <p className="fw-bold text-secondary">
                    {item?.cpu} {item.cpu && " / "}
                    {item?.memory} {item.memory && " / "}
                    {item?.storage} {item?.storage && " / "}
                    {item?.graphics} {item?.graphics && " / "}
                    {item?.connection} {item.connection && " / "}
                    {item?.type} {item.type && " / "}
                    {item.color}
                  </p>
                </div>
                <div className="ms-auto " style={{ width: "20%" }}>
                  <img
                    src={item.brandLogoUrl}
                    alt="img"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              </div>
              <div className="row mt-4" style={{ height: "65vh" }}>
                <div className="col-4">
                  <div className="slider-container" style={{ marginTop: "5%" }}>
                    <Slider {...settings}>
                      <img
                        src="https://www.shutterstock.com/image-vector/img-vector-icon-design-on-260nw-2164648583.jpg"
                        alt="img"
                        style={{ width: "100%" }}
                      />
                      <img
                        src="https://www.shutterstock.com/image-vector/img-vector-icon-design-on-260nw-2164648583.jpg"
                        alt="img"
                        style={{ width: "100%" }}
                      />
                      <img
                        src="https://www.shutterstock.com/image-vector/img-vector-icon-design-on-260nw-2164648583.jpg"
                        alt="img"
                        style={{ width: "100%" }}
                      />
                      <img
                        src="https://www.shutterstock.com/image-vector/img-vector-icon-design-on-260nw-2164648583.jpg"
                        alt="img"
                        style={{ width: "100%" }}
                      />
                    </Slider>
                  </div>
                </div>
                <FullInfoCard item={item} />
                <PriceCard item={item} />
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ProductDetails;
