import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Planets({ data }) {
  return (
    <>
        <h1>Planets</h1>
        <Grid columns={3}>
            {data.map((planets, i) => {
                return (
                    <Grid.Column key={i}>
                        <Link to={`/Planets/${i+1}`}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{planets.name}</Card.Header>
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