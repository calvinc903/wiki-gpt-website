import React from 'react';
import axios from 'axios';
import "./card.css";
import {useAuth0} from "@auth0/auth0-react";



function CommunityPage () {

    const [posts, setPosts] = React.useState([]);
    const [titleText, setTitleText] = React.useState('');
    const [postText, setPostText] = React.useState('');
    const [outfitText, setOutfitText] = React.useState('');

    const [outfits, setOutfits] = React.useState([]);
    const [selectedOutfitId, setSelectedOutfitId] = React.useState('');
    const { user } = useAuth0();

    function fetchPosts() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:8081/api/v1/Post/community',
            headers: {
                "user": JSON.stringify(user)
            }
        };

        axios.request(config)
            .then((response) => {
                let arr = response?.data?.result;
                if (arr) {
                    arr = arr.reverse();
                }
                setPosts(arr);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    React.useEffect(() => {
        if (user) {
            fetchPosts();

            axios.post('http://localhost:8081/api/v1/Clothing/outfits-for-user', {
                "userID": user?.sub
            }, {
                headers: {"user": JSON.stringify(user)}
            })
                .then((response) => {
                    let arr = response?.data?.result;
                    if (arr) {
                        arr = arr.reverse();
                    }
                    console.debug("Got outfits for user", arr);
                    setOutfits(arr);
                    if (arr && arr.length > 0) {
                        setSelectedOutfitId(arr[0]._id);
                    }
                })
                .catch((error) => {
                    console.error("Error getting outfits for user", error);
                });

        }
    }, [user]);

    return (
        <div>
            <h1>Community Page</h1>
            <input placeholder='title' value={titleText} onChange={(event) => {setTitleText(event.target.value)}}></input>
            <input placeholder='text' value={postText} onChange={(event) => {setPostText(event.target.value)}}></input>
            <select id="outfitForm" placeholder="select outfit" data-style="btn-info" name="selectpicker" onChange={(e) => {
                setSelectedOutfitId(e?.target?.value || '');
            }}>
                {
                  outfits.map((outfit) => {
                    return (
                    <option
                      key={outfit._id}
                      value={outfit._id}
                      onClick={() => {
                        setOutfitText(outfit?.shirt?.name + ", " + outfit?.pants?.name + ", " + outfit?.shoes?.name);
                        // setSelectedOutfitId(outfit?._id || '');
                        console.debug("Selected outfit", outfit?._id);
                      }}
                      >
                        {outfit?.shirt?.name + ", " + outfit?.pants?.name + ", " + outfit?.shoes?.name}
                      </option>);
                  })
                }
            </select>
            <button onClick={() => {
                let data = JSON.stringify({
                    "title": titleText,
                    "text": postText,
                    "outfit": selectedOutfitId,//"65139624709491f3b5286cf4",
                    "userId": user?.sub
                  });

                  let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:8081/api/v1/Post/create',
                    headers: {
                      'Content-Type': 'application/json',
                      "user": JSON.stringify(user)
                    },
                    data : data
                  };

                  axios.request(config)
                  .then((response) => {
                    console.log(JSON.stringify(response.data));
                    setTitleText('');
                    setPostText('');
                    fetchPosts();
                  })
                  .catch((error) => {
                    console.log(error);
                  });

            }}>Submit</button>
            {
                posts.map((post) => {
                    return (
                        <div className="card-container" key={post._id}>
                            <p className="card-title">{post.title}</p>
                            <p className="card-description">{post.text}</p>
                            <div className="card-outfit-content">
                                { post.outfit.shirt &&
                                    <div className="card-outfit-piece">
                                        <p>
                                            {post.outfit.shirt.name}
                                        </p>
                                        <img src={post.outfit.shirt.imageUrl}></img>
                                    </div>
                                }

                                { post.outfit.pants &&
                                    <div className="card-outfit-piece">
                                        <p>
                                            {post.outfit.pants.name}
                                        </p>
                                        <img src={post.outfit.pants.imageUrl}></img>
                                    </div>
                                }

                                { post.outfit.shoes &&
                                    <div className="card-outfit-piece">
                                        <p>
                                            {post.outfit.shoes.name}
                                        </p>
                                        <img src={post.outfit.shoes.imageUrl}></img>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommunityPage;
