import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Starships({ data }) {
  return (
    <>
        <h1>Starships</h1>
        <Grid columns={3}>
            {data.map((starships, i) => {
                return (
                    <Grid.Column key={i}>
                        <Link to={`/Starships/${i+2}`}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{starships.name}</Card.Header>
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
