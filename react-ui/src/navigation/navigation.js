import React from 'react';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';

export default () => {
  return(
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a'>Scaling</Menu.Item>
        <Menu.Item as='a'>Connect</Menu.Item>
      </Container>
    </Menu>
  );
};
