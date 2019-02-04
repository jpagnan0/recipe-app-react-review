import React from 'react'
import { Card, CardTitle, Button } from 'react-materialize'
import v4 from 'uuid'

const Category = (props) => {
  return (
    <Card
      key={v4()}
      header={<CardTitle key={v4()} image={props.strCategoryThumb} />}
      title={props.strCategory}
      description={props.strCategoryDescription}
      actions={[<Button key={v4()} onClick={/* fetch for recipes */ null} waves='light'>Find Recipes</Button>]}
    />
  )
}

export default Category
