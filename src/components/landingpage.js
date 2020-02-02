


import React from 'react'; 


import {
  PageSection,
  Title,
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  TextContent
} from '@patternfly/react-core';
import { Card, CardHead, CardActions, CardHeader, CardBody, CardFooter, Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownPosition, DropdownDirection, KebabToggle, } from '@patternfly/react-core';  

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      check1: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
    this.onClick = (checked, event) => {
      const target = event.target; 
      const value = target.type === 'checkbox' ? target.checked : target.value; 
      const name = target.name; 
      this.setState({ [name]: value }); 
    }; 
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];
    return (
      <Card>
        <CardHead>
          <CardActions>
            <Dropdown
              onSelect={this.onSelect}
              toggle={<KebabToggle onToggle={this.onToggle} />}
              isOpen={isOpen}
              isPlain
              dropdownItems={dropdownItems}
              position={'right'}
            />
            <input
              type="checkbox" 
              isChecked={this.state.check1}
              onChange={this.onClick}
              aria-label="card checkbox example"
              id="check-1"
              name="check1"
            />
          </CardActions>
        </CardHead>
        <CardHeader>
          Futurememe
          </CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
        <EmptyState>
        <TextContent>
          Description blah blah
        </TextContent>
      </EmptyState>
      </Card> 
    );
  }
}
export default LandingPage;