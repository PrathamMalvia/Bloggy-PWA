import React, { Component } from "react";
import axios from 'axios'
export class BlogDetail extends Component {


  state = {
    blogDetail: ""
  }

  componentDidMount() {
    const { id } = this.props.match.params
    const url = `https://floran-blog-api.herokuapp.com/${id}`

    const fetchBlogDetail = () => {
      axios.get(url).then(
        (res) => {
          this.setState({
            blogDetail: res.data
          })
        }
      ).catch(
        err => console.log(err)
      )
    }

    fetchBlogDetail()
  }

  render() {

    let blogDetail = this.state.blogDetail

    if (!blogDetail) {
      return <h1>Loading .....</h1>
    } else {
      return (
        <div className="container mx-auto mt-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="detailHeader">{blogDetail.title}</h1>
            </div>
            <div className="col-12 text-center">
              <img className="detailImg" src={blogDetail.image} alt="bg hai yeh" />
            </div>
            <div className="col-12">
              <p className="detailParagraph">
                {blogDetail.description}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default BlogDetail;
