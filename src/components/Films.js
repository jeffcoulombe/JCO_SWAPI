import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Films({ data }) {
  return (
    <>
        <h1>Films</h1>
        <Grid columns={3}>
            {data.map((films, i) => {
                return (
                    <Grid.Column key={i}>
                        <Link to={`/Films/${i+1}`}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{films.title}</Card.Header>
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
