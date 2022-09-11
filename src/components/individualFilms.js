import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { Card, Grid } from 'semantic-ui-react';
import FilmsService from "../services/filmsService";
//import useGetData from "./useGetData";

const filmsServices = new FilmsService();

const IndividualFilms = () => {
  const [films, setFilms] = useState(null);
  const params = useParams();

  const getFilmsById = async () => {
    if (params.id) {
      setFilms(await filmsServices.getFilmsById(params.id));
    }
  };

  useEffect(() => {
    getFilmsById();
  }, [params]);

  return (
    films && (
      <>
        <Card>
            <Card.Content>
                <Card.Header>{films.title}</Card.Header>
                <Card.Description>
                    <strong>Episode</strong>
                    <p>{films.episode_id}</p>
                    <strong>Release Date</strong>
                    <p>{films.release_date}</p>
                    <strong>Characters</strong>
                    <p>{films.characters}</p>
                    <strong>Planets</strong>
                    <p>{films.planets}</p>
                    <strong>Starships</strong>
                    <p>{films.starships}</p>
                    <strong>Vehicles</strong>
                    <p>{films.vehicles}</p>
                </Card.Description>
            </Card.Content>
        </Card>
      </>
    )
  );
};

export default IndividualFilms;