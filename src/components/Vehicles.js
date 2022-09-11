import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Vehicles({ data }) {
  return (
    <>
        <h1>Vehicles</h1>
        <Grid columns={3}>
            {data.map((vehicles, i) => {
                return (
                    <Grid.Column key={i}>
                        <Link to={`/Vehicles/${i+1}`}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{vehicles.name}</Card.Header>
                                </Card.Content>
                            </Card>
                        </Link>
                    </Grid.Column>
                )
            })}
        </Grid>
    </>
  )
}
