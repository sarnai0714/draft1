export default function FirstBlog({params}:{params:{blogID:String}}){
    return (
      <>
    <h1>minii blog huudas {params.blogID}</h1>
    <h2>{params.blogID} blogiig tuhtai uzeerei</h2>;
    </>
    )
  }