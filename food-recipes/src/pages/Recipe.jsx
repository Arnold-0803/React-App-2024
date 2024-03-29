import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import styles from "./Recipe.module.css";
import React from 'react';

function Recipe() {

  let params = useParams();

  const [details, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  }

  useEffect(() => {
    fetchDetails();
  },[params.name]);

  return (
    <DetailWrapper className={styles.body}>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button 
          className={activeTab === "ingredients" ? "active" : ""} 
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button 
          className={activeTab === "instructions" ? "active" : ""} 
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              return(
                <li key={ingredient.id}>{ingredient.original}</li>
              );
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  display: flex;
  
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2{
    margin-bottom: 2rem;
  }

  li{
    font-size: 1rem;
    line-height: 2.5rem;
  }

  ul{
    margin-top: 2rem;
  }

`;

const Button = styled.button`
  padding: .5rem 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 5rem;
`;

export default Recipe;
