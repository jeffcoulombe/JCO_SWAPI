import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function People({ data }) {
  return (
    <>
        <h1>People</h1>
        <Grid columns={3}>
            {data.map((people, i) => {
                return (
                    <Grid.Column key={i}>
                        <Link to={`/People/${i+1}`}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{people.name}</Card.Header>
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
