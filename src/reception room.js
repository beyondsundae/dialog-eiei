import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";

export default class CategoriesResults extends React.Component {
  render() {
    const docs = data.documents;
    return (
      <div>
        <List >
          {docs.map(doc => {
            return <CustomizedListItem key={doc.id} doc={doc} />;
          })}
        </List>
      </div>
    );
  }
}

class CustomizedListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Handle Clicked....");
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    const { doc } = this.props;
    return (
      <div>
        <ListItem button key={doc.Id} onClick={this.handleClick}>
          <ListItemText primary={doc.Name} />
        </ListItem>

        <Collapse key={doc.Sheets.Id} in={this.state.open}>
          <List component="li" disablePadding key={doc.Id}>
            {doc.Sheets.map(sheet => {
              return (
                <ListItem button key={sheet.Id}>
                  <ListItemText key={sheet.Id} primary={sheet.Title} />
                </ListItem>
              );
            })}
          </List>
        </Collapse>
        <Divider />
      </div>
    );
  }
}

const data = {
  documents: [
    {
      Id: 1,
      Name: "Category 1",
      Sheets: [
        {
          Id: 1,
          Title: "Title1 "
        },
        {
          Id: 3,
          Title: "Title 3"
        }
      ]
    },
    {
      Id: 1,
      Name: "Category 2",
      Sheets: [
        {
          Id: 1,
          Title: "Title1 "
        },
        {
          Id: 2,
          Title: "Title 2"
        }
      ]
    }
  ]
};
