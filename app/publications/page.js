"use client"

import pubs from "../data/pubs.json"
import { Checkbox, Collapse, Card, Grid, Text } from "@geist-ui/core";

export default function Publications() {
    const categorizeByYear = (publications) => {
        return publications.reduce((acc, pub) => {
          if (!acc[pub.year]) {
            acc[pub.year] = [];
          }
          acc[pub.year].push(pub);
          return acc;
        }, {});
      };
    const categorizedPubs = categorizeByYear(pubs);
    const handler = value => {
        console.log(value)
    }
    return (
        <div>
            <h2>Publications</h2>
            {/* <Checkbox.Group value={['sydney']} onChange={handler}>
                <Checkbox value="sydney">Conference and Journal Paper</Checkbox>
                <Checkbox value="beijing">Workshop Paper</Checkbox>
                <Checkbox value="london">London</Checkbox>
                <Checkbox value="tokyo">Tokyo</Checkbox>
            </Checkbox.Group> */}
            {Object.keys(categorizedPubs)
                .sort((a, b) => b - a) // Sort years in descending order
                .map((year) => (
                    <div key={year}>
                        <Collapse.Group>
                            <Collapse title={year} initialVisible>
                                <Grid.Container>
                                {categorizedPubs[year].map((pub, index) => (
                                    <Grid xs={24} sm={24} key={index}>
                                        <Card width="100%" style={{marginTop: "20px"}}>
                                            <Text b>{pub.title}</Text>
                                            <Text>{pub.authors}</Text>
                                            <Text type="secondary">{pub.venue_full}</Text>
                                        </Card> 
                                    </Grid>
                                ))}
                                </Grid.Container>
                            </Collapse></Collapse.Group>
                    </div>
                ))
            }
        </div>
    );
}