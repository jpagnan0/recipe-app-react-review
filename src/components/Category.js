import React from 'react'
import { Card, CardTitle, Button } from 'react-materialize'
import v4 from 'uuid'

const Category = (props) => {
  console.log(props)
  // const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props
  return (
    <Card
      key={v4()}
<<<<<<< HEAD
      header={<CardTitle key={v4()} image={props.category.strCategoryThumb} />}
      title={props.category.strCategory}
      actions={[<Button key={v4()} onClick={/* fetch for recipes */ null} waves='light'>Find Recipes</Button>]}
    >
      {props.category.strCategoryDescription}
    </Card>
=======
      header={<CardTitle key={v4()} image={props.strCategoryThumb} />}
      title={props.strCategory}
      description={props.strCategoryDescription}
      actions={[<Button key={v4()} onClick={/* fetch for recipes */ null} waves='light'>Find Recipes</Button>]}
    />
>>>>>>> 18be2353fb9d76fc1cd49547f2923ac9cdeef698
  )
}

export default Category
