# GIGIH 3.0 Midterm - Tokopedia Play Clone Api 

* [Prerequisites](#prerequisites)
* [Database-Structure](#database-structure)
* [API-Structure](#api-structure)
* [List-API](#list-api)


## Prerequisites
Before running the project, make sure you have the following software installed on your machine:
 * [Node.js-(V18)] (https://nodejs.org/)
 * [MongoDB-(v6)] (https://www.mongodb.com/)

## Database-Structure

### 1. Video's Collection Structure
| Key | Type | Description | isRequired |
| --- | ------|-------------| ----------- |
| _id | String | unique identifier | true |
| title | String | title for the video | true |
| urlImageThumbnail | String | URL for the video's thumbnail | true |
| createdAt | timestamps | Generating by Mongo DB | true |
| updatedAt | timestamps | Generating by Mongo DB | true |

### 2. Product's Collection Structure
| Key | Type | Description | isRequired |
| --- | ------|-------------| ----------- |
| _id | String | unique identifier | true |
| linkProduct | String | Link to buy product | true |
| title | String | Title of product | true |
| price | Number | Price of product | true |
| videoId | ObjectId | video's collection id | true |
| createdAt | timestamps | Generating by Mongo DB | true |
| updatedAt | timestamps | Generating by Mongo DB | true |

### 3. Comment's Collection Structure
| Key | Type | Description | isRequired |
| --- | ------|-------------| ----------- |
| _id | String | unique identifier | true |
| username | String | Username of commenter | true |
| comment | String | message on comment | true |
| videoId | ObjectId | video's collection id | true |
| createdAt | timestamps | Generating by Mongo DB | true |
| updatedAt | timestamps | Generating by Mongo DB | true |

## API-Structure

### Request
    - Method
    - Endpoint
    - Parameter
    - URL Path
    - Body

### Response
    - Status
    - Body

## List-API

### API Minimum

#### 1. Video Thumbnail List

<!-- ***Request*** -->
    - Method = GET
    - Endpoint = /video
    - Parameter = null
    - URL Path = http://localhost:3000/api/video
    - Body = null

***Response***
    - Status = 200
    - Body 
    ```js
    {
    "message": "Success Get Videos",
    "data": [
        {
            "_id": "64c3373f5ad7b28094b095be",
            "title": "Flash Sale",
            "urlImageThumbnail": "https://images.pexels.com/photos/9492552/pexels-photo-9492552.jpeg?cs=srgb&dl=pexels-garrison-gao-9492552.jpg&fm=jpg",
            "createdAt": "2023-07-28T03:34:23.315Z",
            "updatedAt": "2023-07-28T03:34:23.315Z",
            "__v": 0
        },
        {
            "_id": "64c337535ad7b28094b095c0",
            "title": "Midnight Sale",
            "urlImageThumbnail": "https://images.unsplash.com/photo-1597573337211-e1080012b84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8OSUzQTE2fGVufDB8fDB8fHww&w=1000&q=80",
            "createdAt": "2023-07-28T03:34:43.844Z",
            "updatedAt": "2023-07-28T03:34:43.844Z",
            "__v": 0
        }
    ]
    }
    ```

#### 2. Product List
***Request***
    - Method = GET
    - Endpoint = /product
    - Parameter = videoId
    - URL Path = http://localhost:3000/api/product/:videoId
    - Body = null

***Response***
    - Status = 200
    - Body 
    ```js
    {
    "message": "Success get Products",
    "data": [
        {
            "_id": "64c338ad8747c0b26a4d9a80",
            "linkProduct": "https://www.tokopedia.com/smartmediacom/laptop-axioo-mybook-14e-x1-n4020-4gb-256gb-ssd-14-hd-win10",
            "title": "Laptop Axioo MyBook 14E X1|N4020|4GB|256GB SSD",
            "price": 3467000,
            "videoId": {
                "_id": "64c3373f5ad7b28094b095be",
                "title": "Flash Sale",
                "urlImageThumbnail": "https://images.pexels.com/photos/9492552/pexels-photo-9492552.jpeg?cs=srgb&dl=pexels-garrison-gao-9492552.jpg&fm=jpg",
                "createdAt": "2023-07-28T03:34:23.315Z",
                "updatedAt": "2023-07-28T03:34:23.315Z",
                "__v": 0
            },
            "createdAt": "2023-07-28T03:40:29.214Z",
            "updatedAt": "2023-07-28T03:40:29.214Z",
            "__v": 0
        }
    ]
    }
    ```

#### 3. Comments List
***Request***
    - Method = GET
    - Endpoint = /comment
    - Parameter = videoId
    - URL Path = http://localhost:3000/api/comment/:videoId
    - Body = null

***Response***
    - Status = 200
    - Body 
    ```js
    {
    "message": "Success get Comments",
    "data": [
        {
            "_id": "64c3399e44d5b5d1c4413228",
            "username": "user1",
            "comment": "Amazing Content",
            "videoId": {
                "_id": "64c3373f5ad7b28094b095be",
                "title": "Flash Sale",
                "urlImageThumbnail": "https://images.pexels.com/photos/9492552/pexels-photo-9492552.jpeg?cs=srgb&dl=pexels-garrison-gao-9492552.jpg&fm=jpg",
                "createdAt": "2023-07-28T03:34:23.315Z",
                "updatedAt": "2023-07-28T03:34:23.315Z",
                "__v": 0
            },
            "createdAt": "2023-07-28T03:44:30.693Z",
            "updatedAt": "2023-07-28T03:44:30.693Z",
            "__v": 0
        }
    ]
    }
    ```

#### 4. Submit comment
***Request***
    - Method = POST
    - Endpoint = /comment
    - Parameter = videoId
    - URL Path = http://localhost:3000/api/comment/:videoId
    - Body
    ```js
    {
    "username":"user1",
    "comment":"Amazing Content"
    }
    ```

***Response***
    - Status = 200
    - Body 
    ```js
    {
    "message": "Success get Comments",
    "data": [
        {
            "_id": "64c3399e44d5b5d1c4413228",
            "username": "user1",
            "comment": "Amazing Content",
            "videoId": {
                "_id": "64c3373f5ad7b28094b095be",
                "title": "Flash Sale",
                "urlImageThumbnail": "https://images.pexels.com/photos/9492552/pexels-photo-9492552.jpeg?cs=srgb&dl=pexels-garrison-gao-9492552.jpg&fm=jpg",
                "createdAt": "2023-07-28T03:34:23.315Z",
                "updatedAt": "2023-07-28T03:34:23.315Z",
                "__v": 0
            },
            "createdAt": "2023-07-28T03:44:30.693Z",
            "updatedAt": "2023-07-28T03:44:30.693Z",
            "__v": 0
        }
    ]
    }
    ```
