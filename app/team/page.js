"use client"
import { Grid, Card, Text, Link, Image, Tag, Collapse } from "@geist-ui/core";
import { Github } from "@geist-ui/icons";
import { Linkedin } from '@geist-ui/icons'
import { Home } from '@geist-ui/icons'
import members from "../data/team.json"
import { Mail } from '@geist-ui/icons'
import { MapPin } from '@geist-ui/icons'

export default function Team() {
    return (
        <div style={{ maxWidth: "55rem", margin: "auto" }}>
            <h2>People</h2>
            <Collapse.Group>
                <Collapse title="Core Members" initialVisible>
                    <Grid.Container gap={2}>
                        {members.map((member, index) => {
                            if (member.status === "current")
                                return <Grid xs={12} sm={12} key={index}>
                                    <Card width="100%" className="member-container">
                                        <div className="member-content">

                                            {/* Left Side: Text Content */}
                                            <div className="member-info">
                                                <Text h4 my={0}>{member.name}</Text>
                                                <Text type="secondary" small>{member.title}</Text>
                                                <Text type="secondary" small>{member.affiliation}</Text>
                                                {member.topics && <Tag type="lite">{member.topics}</Tag>}
                                                {/* Social Media Links */}
                                                <div className="member-links">
                                                    <Link target="_blank" href={member.link}>
                                                        <Home size={16} />
                                                    </Link>
                                                    {member.linkedin && (
                                                        <Link target="_blank" href={member.linkedin}>
                                                            <Linkedin size={16} />
                                                        </Link>
                                                    )}
                                                    <Link target="_blank" href={"mailto:" + member.email}>
                                                        <Mail size={16} />
                                                    </Link>
                                                </div>
                                                <div style={{paddingTop:"12px"}}><MapPin size={16} /><Text type="secondary" small style={{paddingLeft:"5px", paddingBottom: "2px"}}>{member.office}</Text></div>
                                            </div>
                                            {/* Left Side: Profile Image */}
                                            <Image
                                                width={"120px"}
                                                height={"120px"}
                                                src={member.avatar}
                                                className="member-image"
                                            />
                                        </div>
                                    </Card>
                                </Grid>
                        })}
                    </Grid.Container>
                </Collapse>
                <Collapse title="Affiliated Members" initialVisible>
                    <ul>
                        {members.map((member, index) => {
                            if (member.status === "collaborator")
                                return <li key={index}><a href={member.link} target="_blank" rel="noopener noreferrer">{member.name}</a>, <span dangerouslySetInnerHTML={{ __html: member.title }} />
                                </li>
                        })}
                    </ul>
                </Collapse>
                <Collapse title="Alumni, Past Visitors, and Interns" initialVisible>
                    <ul>
                        {members.map((member, index) => {
                            if (member.status === "left")
                                return <li key={index}><p><a href={member.link} target="_blank" rel="noopener noreferrer">{member.name}</a>, <span dangerouslySetInnerHTML={{ __html: member.title }} />
                                </p></li>
                        })}
                    </ul>
                </Collapse>
            </Collapse.Group>
            <div>
            </div>
        </div>
    );
}