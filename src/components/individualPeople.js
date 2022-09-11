import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { Card, Grid } from 'semantic-ui-react';
import PeopleService from "../services/peopleService";
//import StarshipsService from "../services/starshipsService";
//import useGetData from "./useGetData";

const peopleServices = new PeopleService();

const IndividualPeople = () => {
  const [people, setPeople] = useState(null);
  const params = useParams();

  const getPeopleById = async () => {
    if (params.id) {
      setPeople(await peopleServices.getPeopleById(params.id));
    }
  };

  useEffect(() => {
    getPeopleById();
  }, [params]);

  return (
    people && (
      <>
        <Card>
            <Card.Content>
                <Card.Header>{people.name}</Card.Header>
                <Card.Description>
                    <strong>Height</strong>
                    <p>{people.height}</p>
                    <strong>Mass</strong>
                    <p>{people.mass}</p>
                    <strong>Hair Color</strong>
                    <p>{people.hair_color}</p>

                    <strong>Home planet</strong><br/>
                    <Link to='/individualHome/'>
                      {people.homeworld}
                    </Link><br/><br/>

                    <strong>Films</strong>
                    <p>{people.films}</p>

                    <strong>Vehicles</strong>
                    <p>{people.vehicles}</p>
                    
                    <strong>Starships</strong><br/>
                    <Link to='/individualStarships/'>
                      {people.starships}
                    </Link>

                </Card.Description>
            </Card.Content>
        </Card>
      </>
    )
  );
};

export default IndividualPeople;



