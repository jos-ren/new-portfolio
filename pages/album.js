import Head from "next/head";
import styled from "styled-components";
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const Main = styled.div`
  background: var(--black);
  color: white;
  display: flex;
  justify-content: center;
  align-items:center;
//   width:600px;
//   border:1px solid red;
`;

const Center = styled.div`
  max-width: 960px;
  padding: 0 32px;
  margin: 0 auto;
  // border: 1px solid red;
`;

export default function Resume() {

    const photos = [
        {
            src: "https://josren-images.s3.us-west-2.amazonaws.com/0001_%23%23%23.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGQpeEolWcvTslUDMtbYwk3rWj3NVI%2FWPwQ6bnZZm6K6AiBdyXUfADfyJKvoHYXEMwm9uZGWY68%2B1pkHQCve9ahzpSrtAgjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDIwNDk1MDU4OTIxMSIM19POzxAVrwMArxJhKsECqhfSboXWTThozWrnsVMfkmfHoeTL9q5sr7OF7IqnxGcekT%2FEe2x15YW2aEimKQ9XtG1Kf9CWO%2FxbnrKUX9jkVbDK1eu1vVO5OdLyrXh9O2l2NXHoug%2BcY%2B3mexnbAAJf8klnBKZjTMvgpkGrYGt4g0SUw6s9SOb9RABcEmOewnILtUzsPH%2BmoKNWjH0W%2FGyj59qhC7iy1tVv0YsPlByxUvq3Y8RjwJ0BagH5sUikC3if%2BMNamGKLfQOpVyg9grQIiyfEfEvrNJpVNUbQlcI5I6Qp79WA7z6m%2F3ks7kSwDREkZR4PU1T4CsS6T4UbKBgfvWkKbVDD0%2F5yfLJytbzedDd1cjnOkK7kDp5PTSRF4spq5o152z9Yrft0KYtsqR6bSNX0dHvsu6%2BCXvkOUU%2BwO3MWVIYIglSsBVeVEZTE7aTDMNLUlpQGOrQCE6r2fou92JHfzzKBM8PvQ65n1kDMEia0snVLt2ecIvwGbMfbu4Fv1oB9XedW7uprSCDBum01l3XBUTuRStW2H5BqWlVXivp2EoyhX69tbGQBPNlHdHCgxehnycf9TdSqO%2FnvwNDLF7s78j0ee4e9KqwjvvVA81SlxYqaRSkUnRrspaqIV1To44ZwY9dCc8Lv%2F%2FR2x%2BjSW5Yg2EeDD2aL5J0xOBlNoExoNtOUEgrI5jExKV6qHk%2FKIjo5P7xjAW3gGKKP7zcHQmw2AGzeWXvZBFpiM1jIo0wPY%2B30wGBmTDUaiz%2FVUp6FTA8TyiQc5UKn48CgZMgdL0U69ZOzC%2FpmQHP3yM1cdZ8Oskb2enwvGvzN%2Fp2ApSl7jHHAVCgFNDyQEgKMH8aSWyTbbcV5VAxV8ez97c0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220519T040951Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAS7OABZ4N5CZ43YUZ%2F20220519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=3174273a29ca5f380650d1f9c9e8568754c624052990e9dad8c38944034ff84d",
            width: 3,
            height: 2
        },
        {
            src: "https://josren-images.s3.us-west-2.amazonaws.com/0002_%23%23%23.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGQpeEolWcvTslUDMtbYwk3rWj3NVI%2FWPwQ6bnZZm6K6AiBdyXUfADfyJKvoHYXEMwm9uZGWY68%2B1pkHQCve9ahzpSrtAgjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDIwNDk1MDU4OTIxMSIM19POzxAVrwMArxJhKsECqhfSboXWTThozWrnsVMfkmfHoeTL9q5sr7OF7IqnxGcekT%2FEe2x15YW2aEimKQ9XtG1Kf9CWO%2FxbnrKUX9jkVbDK1eu1vVO5OdLyrXh9O2l2NXHoug%2BcY%2B3mexnbAAJf8klnBKZjTMvgpkGrYGt4g0SUw6s9SOb9RABcEmOewnILtUzsPH%2BmoKNWjH0W%2FGyj59qhC7iy1tVv0YsPlByxUvq3Y8RjwJ0BagH5sUikC3if%2BMNamGKLfQOpVyg9grQIiyfEfEvrNJpVNUbQlcI5I6Qp79WA7z6m%2F3ks7kSwDREkZR4PU1T4CsS6T4UbKBgfvWkKbVDD0%2F5yfLJytbzedDd1cjnOkK7kDp5PTSRF4spq5o152z9Yrft0KYtsqR6bSNX0dHvsu6%2BCXvkOUU%2BwO3MWVIYIglSsBVeVEZTE7aTDMNLUlpQGOrQCE6r2fou92JHfzzKBM8PvQ65n1kDMEia0snVLt2ecIvwGbMfbu4Fv1oB9XedW7uprSCDBum01l3XBUTuRStW2H5BqWlVXivp2EoyhX69tbGQBPNlHdHCgxehnycf9TdSqO%2FnvwNDLF7s78j0ee4e9KqwjvvVA81SlxYqaRSkUnRrspaqIV1To44ZwY9dCc8Lv%2F%2FR2x%2BjSW5Yg2EeDD2aL5J0xOBlNoExoNtOUEgrI5jExKV6qHk%2FKIjo5P7xjAW3gGKKP7zcHQmw2AGzeWXvZBFpiM1jIo0wPY%2B30wGBmTDUaiz%2FVUp6FTA8TyiQc5UKn48CgZMgdL0U69ZOzC%2FpmQHP3yM1cdZ8Oskb2enwvGvzN%2Fp2ApSl7jHHAVCgFNDyQEgKMH8aSWyTbbcV5VAxV8ez97c0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220519T041236Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAS7OABZ4N5CZ43YUZ%2F20220519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=5a5347f75331617f02aa9480a540c56b43dd24fb60afe6844175cd9818d68d0a",
            width: 3,
            height: 2
        },
        {
            src: "https://josren-images.s3.us-west-2.amazonaws.com/0020_%23%23%23.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGQpeEolWcvTslUDMtbYwk3rWj3NVI%2FWPwQ6bnZZm6K6AiBdyXUfADfyJKvoHYXEMwm9uZGWY68%2B1pkHQCve9ahzpSrtAgjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDIwNDk1MDU4OTIxMSIM19POzxAVrwMArxJhKsECqhfSboXWTThozWrnsVMfkmfHoeTL9q5sr7OF7IqnxGcekT%2FEe2x15YW2aEimKQ9XtG1Kf9CWO%2FxbnrKUX9jkVbDK1eu1vVO5OdLyrXh9O2l2NXHoug%2BcY%2B3mexnbAAJf8klnBKZjTMvgpkGrYGt4g0SUw6s9SOb9RABcEmOewnILtUzsPH%2BmoKNWjH0W%2FGyj59qhC7iy1tVv0YsPlByxUvq3Y8RjwJ0BagH5sUikC3if%2BMNamGKLfQOpVyg9grQIiyfEfEvrNJpVNUbQlcI5I6Qp79WA7z6m%2F3ks7kSwDREkZR4PU1T4CsS6T4UbKBgfvWkKbVDD0%2F5yfLJytbzedDd1cjnOkK7kDp5PTSRF4spq5o152z9Yrft0KYtsqR6bSNX0dHvsu6%2BCXvkOUU%2BwO3MWVIYIglSsBVeVEZTE7aTDMNLUlpQGOrQCE6r2fou92JHfzzKBM8PvQ65n1kDMEia0snVLt2ecIvwGbMfbu4Fv1oB9XedW7uprSCDBum01l3XBUTuRStW2H5BqWlVXivp2EoyhX69tbGQBPNlHdHCgxehnycf9TdSqO%2FnvwNDLF7s78j0ee4e9KqwjvvVA81SlxYqaRSkUnRrspaqIV1To44ZwY9dCc8Lv%2F%2FR2x%2BjSW5Yg2EeDD2aL5J0xOBlNoExoNtOUEgrI5jExKV6qHk%2FKIjo5P7xjAW3gGKKP7zcHQmw2AGzeWXvZBFpiM1jIo0wPY%2B30wGBmTDUaiz%2FVUp6FTA8TyiQc5UKn48CgZMgdL0U69ZOzC%2FpmQHP3yM1cdZ8Oskb2enwvGvzN%2Fp2ApSl7jHHAVCgFNDyQEgKMH8aSWyTbbcV5VAxV8ez97c0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220519T041259Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAS7OABZ4N5CZ43YUZ%2F20220519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=db5fa5bce50d7f7e60152c13f86f7df7b8e577d6d1362cbd905ccf30faa620a8",
            width: 3,
            height: 2
        },
        {
            src: "https://josren-images.s3.us-west-2.amazonaws.com/0007_%23%23%23.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGQpeEolWcvTslUDMtbYwk3rWj3NVI%2FWPwQ6bnZZm6K6AiBdyXUfADfyJKvoHYXEMwm9uZGWY68%2B1pkHQCve9ahzpSrtAgjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDIwNDk1MDU4OTIxMSIM19POzxAVrwMArxJhKsECqhfSboXWTThozWrnsVMfkmfHoeTL9q5sr7OF7IqnxGcekT%2FEe2x15YW2aEimKQ9XtG1Kf9CWO%2FxbnrKUX9jkVbDK1eu1vVO5OdLyrXh9O2l2NXHoug%2BcY%2B3mexnbAAJf8klnBKZjTMvgpkGrYGt4g0SUw6s9SOb9RABcEmOewnILtUzsPH%2BmoKNWjH0W%2FGyj59qhC7iy1tVv0YsPlByxUvq3Y8RjwJ0BagH5sUikC3if%2BMNamGKLfQOpVyg9grQIiyfEfEvrNJpVNUbQlcI5I6Qp79WA7z6m%2F3ks7kSwDREkZR4PU1T4CsS6T4UbKBgfvWkKbVDD0%2F5yfLJytbzedDd1cjnOkK7kDp5PTSRF4spq5o152z9Yrft0KYtsqR6bSNX0dHvsu6%2BCXvkOUU%2BwO3MWVIYIglSsBVeVEZTE7aTDMNLUlpQGOrQCE6r2fou92JHfzzKBM8PvQ65n1kDMEia0snVLt2ecIvwGbMfbu4Fv1oB9XedW7uprSCDBum01l3XBUTuRStW2H5BqWlVXivp2EoyhX69tbGQBPNlHdHCgxehnycf9TdSqO%2FnvwNDLF7s78j0ee4e9KqwjvvVA81SlxYqaRSkUnRrspaqIV1To44ZwY9dCc8Lv%2F%2FR2x%2BjSW5Yg2EeDD2aL5J0xOBlNoExoNtOUEgrI5jExKV6qHk%2FKIjo5P7xjAW3gGKKP7zcHQmw2AGzeWXvZBFpiM1jIo0wPY%2B30wGBmTDUaiz%2FVUp6FTA8TyiQc5UKn48CgZMgdL0U69ZOzC%2FpmQHP3yM1cdZ8Oskb2enwvGvzN%2Fp2ApSl7jHHAVCgFNDyQEgKMH8aSWyTbbcV5VAxV8ez97c0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220519T041522Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAS7OABZ4N5CZ43YUZ%2F20220519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=0383244050688d0b19a2ff43aea3f82015ea26273f1503c61f4db5986a5d2c1e",
            width: 3,
            height: 2
        },
        {
            src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/PpOHJezOalU/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
            width: 4927,
            height: 1000
        },
        {
            src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
            width: 4,
            height: 3
        }
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    //upload images modal
    //function upload to s3
    //function upload to db (insert s3 link)

    return (
        <div>
            <Main>
                <Head>
                    <title>Resume</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/icons/logo.png" />
                </Head>
                <Center>
                    <Gallery photos={photos} onClick={openLightbox} />;
                </Center>
            </Main>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}
