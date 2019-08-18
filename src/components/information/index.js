import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from "react";
import "./styles.scss";

export default function Information(props) {

  return (
    <Card className={'content'}>
      <CardContent>
        <Typography gutterBottom variant="h2" component="h2" className={'title'}>
          WELCOME
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
          <br/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.onNext}>Next</Button>
      </CardActions>
    </Card>
  );
}
