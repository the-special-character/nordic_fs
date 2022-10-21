const obj = {
    a: 1,
    b: 2,
    c: 3
}

// destructuring + spread operator
const { b, c, ...rest } = obj;

console.log(obj);

console.log(rest);


const project = {
    "id": 1,
    "projectName": "Field Sales Automation",
    "company_detail": null,
    "Description": "Field Sales automation helps Strengthening field sales productivity and visibility using Salesforce.com\nthe solution to engage with the retailer in a whole new way, It Engages with retailers better and faster plan\nexecute the weekly tour plan effectively with the right quality of data Field data management.",
    "link": "https://play.google.com/store/apps/details?id=com.sg.R79A.gnoapp&hl=en_IN",
    "role": "Individual Developer",
    "category": "MobileApp",
    "created_at": "2020-06-27T18:21:06.303Z",
    "updated_at": "2020-07-17T11:57:47.069Z",
    "created_by": null,
    "updated_by": null,
    "categories": [
        {
            "id": 18,
            "categoryName": "Mobile Application",
            "categoryDescription": null
        },
        {
            "id": 19,
            "categoryName": "IOS",
            "categoryDescription": null
        },
        {
            "id": 20,
            "categoryName": "Android",
            "categoryDescription": null
        },
        {
            "id": 21,
            "categoryName": "Sales Automation Application",
            "categoryDescription": null
        }
    ],
    "images": [
        {
            "id": 150,
            "name": "Screenshot_20200717-153934_GNO FSA",
            "alternativeText": "",
            "caption": "",
            "width": 1440,
            "height": 2560,
            "formats": {
                "large": {
                    "ext": ".jpeg",
                    "url": "https://res.cloudinary.com/dnxzgxivo/image/upload/v1594980932/large_Screenshot_20200717_153934_GNO_FSA_067aafa267.jpg",
                    "hash": "large_Screenshot_20200717_153934_GNO_FSA_067aafa267",
                    "mime": "image/jpeg",
                    "path": null,
                    "size": 30.62,
                    "width": 563,
                    "height": 1000,
                    "provider_metadata": {
                        "public_id": "large_Screenshot_20200717_153934_GNO_FSA_067aafa267",
                        "resource_type": "image"
                    }
                },
                "small": {
                    "ext": ".jpeg",
                    "url": "https://res.cloudinary.com/dnxzgxivo/image/upload/v1594980933/small_Screenshot_20200717_153934_GNO_FSA_067aafa267.jpg",
                    "hash": "small_Screenshot_20200717_153934_GNO_FSA_067aafa267",
                    "mime": "image/jpeg",
                    "path": null,
                    "size": 11.78,
                    "width": 281,
                    "height": 500,
                    "provider_metadata": {
                        "public_id": "small_Screenshot_20200717_153934_GNO_FSA_067aafa267",
                        "resource_type": "image"
                    }
                },
                "medium": {
                    "ext": ".jpeg",
                    "url": "https://res.cloudinary.com/dnxzgxivo/image/upload/v1594980933/medium_Screenshot_20200717_153934_GNO_FSA_067aafa267.jpg",
                    "hash": "medium_Screenshot_20200717_153934_GNO_FSA_067aafa267",
                    "mime": "image/jpeg",
                    "path": null,
                    "size": 20.39,
                    "width": 422,
                    "height": 750,
                    "provider_metadata": {
                        "public_id": "medium_Screenshot_20200717_153934_GNO_FSA_067aafa267",
                        "resource_type": "image"
                    }
                },
                "thumbnail": {
                    "ext": ".jpeg",
                    "url": "https://res.cloudinary.com/dnxzgxivo/image/upload/v1594980931/thumbnail_Screenshot_20200717_153934_GNO_FSA_067aafa267.jpg",
                    "hash": "thumbnail_Screenshot_20200717_153934_GNO_FSA_067aafa267",
                    "mime": "image/jpeg",
                    "path": null,
                    "size": 2.39,
                    "width": 88,
                    "height": 156,
                    "provider_metadata": {
                        "public_id": "thumbnail_Screenshot_20200717_153934_GNO_FSA_067aafa267",
                        "resource_type": "image"
                    }
                }
            },
            "hash": "Screenshot_20200717_153934_GNO_FSA_067aafa267",
            "ext": ".jpeg",
            "mime": "image/jpeg",
            "size": 94.66,
            "url": "https://res.cloudinary.com/dnxzgxivo/image/upload/v1594980931/Screenshot_20200717_153934_GNO_FSA_067aafa267.jpg",
            "previewUrl": null,
            "provider": "cloudinary",
            "provider_metadata": {
                "public_id": "Screenshot_20200717_153934_GNO_FSA_067aafa267",
                "resource_type": "image"
            },
            "created_at": "2020-07-17T10:15:34.105Z",
            "updated_at": "2020-07-17T10:15:34.105Z"
        }
    ],
    "video": null,
    "coverImage": {
        "id": 151,
        "name": "Screenshot_20200717-153928_GNO FSA",
        "alternativeText": "",
        "caption": "",
        "width": 1440,
        "height": 2560,
        "formats": {
            "large": {
                "ext": ".jpeg",
                "url": "https://res.cloudinary.com/dnxzgxivo/image/upload/v1594980932/large_Screenshot_20200717_153928_GNO_FSA_3e60629f9a.jpg",
                "hash": "large_Screenshot_20200717_153928_GNO_FSA_3e60629f9a",
                "mime": "image/jpeg",
                "path": null,
                "size": 21.71,
                "width": 563,
                "height": 1000,
                "provider_metadata": {
                    "public_id": "large_Screenshot_20200717_153928_GNO_FSA_3e60629f9a",
                    "resource_type": "image"
                }
            },
            "small": {
                "ext": ".jpeg",
                "url": "https://res.cloudinary.com/dnxzgxivo/image/upload/v1594980933/small_Screenshot_20200717_153928_GNO_FSA_3e60629f9a.jpg",
                "hash": "small_Screenshot_20200717_153928_GNO_FSA_3e60629f9a",
                "mime": "image/jpeg",
                "path": null,
                "size": 8.6,
                "width": 281,
                "height": 500,
                "provider_metadata": {
                    "public_id": "small_Screenshot_20200717_153928_GNO_FSA_3e60629f9a",
                    "resource_type": "image"
                }
            },
            "medium": {
                "ext": ".jpeg",
                "url": "https://res.cloudinary.com/dnxzgxivo/image/upload/v1594980932/medium_Screenshot_20200717_153928_GNO_FSA_3e60629f9a.jpg",
                "hash": "medium_Screenshot_20200717_153928_GNO_FSA_3e60629f9a",
                "mime": "image/jpeg",
                "path": null,
                "size": 15.1,
                "width": 422,
                "height": 750,
                "provider_metadata": {
                    "public_id": "medium_Screenshot_20200717_153928_GNO_FSA_3e60629f9a",
                    "resource_type": "image"
                }
            },
            "thumbnail": {
                "ext": ".jpeg",
                "url": "https://res.cloudinary.com/dnxzgxivo/image/upload/v1594980931/thumbnail_Screenshot_20200717_153928_GNO_FSA_3e60629f9a.jpg",
                "hash": "thumbnail_Screenshot_20200717_153928_GNO_FSA_3e60629f9a",
                "mime": "image/jpeg",
                "path": null,
                "size": 1.81,
                "width": 88,
                "height": 156,
                "provider_metadata": {
                    "public_id": "thumbnail_Screenshot_20200717_153928_GNO_FSA_3e60629f9a",
                    "resource_type": "image"
                }
            }
        },
        "hash": "Screenshot_20200717_153928_GNO_FSA_3e60629f9a",
        "ext": ".jpeg",
        "mime": "image/jpeg",
        "size": 69.01,
        "url": "https://res.cloudinary.com/dnxzgxivo/image/upload/v1594980931/Screenshot_20200717_153928_GNO_FSA_3e60629f9a.jpg",
        "previewUrl": null,
        "provider": "cloudinary",
        "provider_metadata": {
            "public_id": "Screenshot_20200717_153928_GNO_FSA_3e60629f9a",
            "resource_type": "image"
        },
        "created_at": "2020-07-17T10:15:34.268Z",
        "updated_at": "2020-07-17T10:15:34.268Z"
    },
    "skills": [
        {
            "id": 3,
            "name": "React Native",
            "ratting": 4,
            "link": "https://reactnative.dev/",
            "created_at": "2020-06-26T13:25:04.960Z",
            "updated_at": "2020-06-26T13:25:04.960Z",
            "created_by": null,
            "updated_by": null,
            "logo": {
                "id": 25,
                "name": "iconfinder_React.js_logo_1174949",
                "alternativeText": "",
                "caption": "",
                "width": 128,
                "height": 128,
                "formats": null,
                "hash": "iconfinder_React_js_logo_1174949_46cb169292",
                "ext": ".png",
                "mime": "image/png",
                "size": 3.37,
                "url": "https://res.cloudinary.com/dnxzgxivo/image/upload/v1593177760/iconfinder_React_js_logo_1174949_46cb169292.webp",
                "previewUrl": null,
                "provider": "cloudinary",
                "provider_metadata": {
                    "public_id": "iconfinder_React_js_logo_1174949_46cb169292",
                    "resource_type": "image"
                },
                "created_at": "2020-06-26T13:22:40.762Z",
                "updated_at": "2020-06-26T13:22:40.762Z"
            }
        },
        {
            "id": 12,
            "name": "Redux/Redux-saga/Redux-thunk",
            "ratting": 4.5,
            "link": "https://redux.js.org/",
            "created_at": "2020-07-17T11:07:53.958Z",
            "updated_at": "2020-07-17T11:07:53.958Z",
            "created_by": null,
            "updated_by": null,
            "logo": null
        },
        {
            "id": 19,
            "name": "Jenkins/Fastlane",
            "ratting": 3.5,
            "link": null,
            "created_at": "2020-07-17T11:39:39.990Z",
            "updated_at": "2020-07-17T11:39:57.523Z",
            "created_by": null,
            "updated_by": null,
            "logo": null
        }
    ]
};

const {skills,coverImage,images,  categories, ...rest2 } = project;

console.log(rest2);

