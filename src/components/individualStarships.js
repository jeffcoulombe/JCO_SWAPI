import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { Card, Grid } from 'semantic-ui-react';
import StarshipsService from "../services/starshipsService";

const starshipsServices = new StarshipsService();

const Individualstarships = () => {
  const [starships, setStarships] = useState(null);
  const params = useParams();

  const getStarshipsById = async () => {
    if (params.id) {
      setStarships(await starshipsServices.getStarshipsById(params.id));
    }
  };

  useEffect(() => {
    getStarshipsById();
  }, [params]);

  return (
    starships && (
      <>
        <Card>
            <Card.Content>
                <Card.Header>{starships.name}</Card.Header>
                <Card.Description>

                    <strong>Model</strong>
                    <p>{starships.model}</p>

                    <strong>Manufacturer</strong>
                    <p>{starships.manufacturer}</p>

                    <strong>Films</strong>
                    <p>{starships.films}</p>

                    <strong>Pilots</strong>
                    <p>{starships.pilots}</p>

                </Card.Description>
            </Card.Content>
        </Card>
      </>
    )
  );
};

export default Individualstarships;