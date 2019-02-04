import React from 'react'
import { Card, CardTitle, Button } from 'react-materialize'
import v4 from 'uuid'

const Category = (props) => {
  console.log(props)
  // const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props
  return (
    <Card
      key={v4()}
      header={<CardTitle key={v4()} image={props.category.strCategoryThumb} />}
      title={props.category.strCategory}
      actions={[<Button key={v4()} onClick={/* fetch for recipes */ null} waves='light'>Find Recipes</Button>]}
    >
      {props.category.strCategoryDescription}
    </Card>
  )
}

export default Category
