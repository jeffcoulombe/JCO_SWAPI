import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { Card, Grid } from 'semantic-ui-react';
import PlanetsService from "../services/planetsService";

const planetsServices = new PlanetsService();

const Individualplanets = () => {
  const [planets, setPlanets] = useState(null);
  const params = useParams();

  const getPlanetsById = async () => {
    if (params.id) {
      setPlanets(await planetsServices.getPlanetsById(params.id));
    }
  };

  useEffect(() => {
    getPlanetsById();
  }, [params]);

  return (
    planets && (
      <>
        <Card>
            <Card.Content>
                <Card.Header>{planets.name}</Card.Header>
                <Card.Description>
                    <strong>Diameter</strong>
                    <p>{planets.diameter}</p>

                    <strong>Climate</strong>
                    <p>{planets.climate}</p>

                    <strong>Gravity</strong>
                    <p>{planets.gravity}</p>

                    <strong>Residents</strong>
                    <p>{planets.residents}</p>

                    <strong>Films</strong>
                    <p>{planets.films}</p>

                </Card.Description>
            </Card.Content>
        </Card>
      </>
    )
  );
};

export default Individualplanets;