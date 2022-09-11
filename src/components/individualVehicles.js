import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { Card, Grid } from 'semantic-ui-react';
import VehiclesService from "../services/vehiclesService";

const vehiclesServices = new VehiclesService();

const IndividualVehicles = () => {
  const [vehicles, setVehicles] = useState(null);
  const params = useParams();

  const getVehiclesById = async () => {
    if (params.id) {
      setVehicles(await vehiclesServices.getVehiclesById(params.id));
    }
  };

  useEffect(() => {
    getVehiclesById();
  }, [params]);

 // console.log(vehicles.name);

  return (
    vehicles && (
    <>
        <Card>
            <Card.Content>
                <Card.Header>{vehicles.name}</Card.Header>
                <Card.Description>
                    <strong>Model</strong>
                    <p>{vehicles.model}</p>
                    <strong>Manufacturer</strong>
                    <p>{vehicles.manufacturer}</p>
                    <strong>Pilots</strong>
                    <p>{vehicles.pilots}</p>
                    <strong>Films</strong>
                    <p>{vehicles.films}</p>
                </Card.Description>
            </Card.Content>
        </Card>
    </>
    )
  );
};

export default IndividualVehicles;