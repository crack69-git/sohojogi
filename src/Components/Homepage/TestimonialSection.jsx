import { Avatar, Button, Card, Modal } from "@heroui/react";
import { Rating } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FaCommentDots, FaHandPointRight } from "react-icons/fa";
import StarIcon from "@mui/icons-material/Star";

const TestimonialSection = () => {
  const cards = (
    <>
      <Card className="w-full gap-2 h-full">
        <img
          alt="Indie Hackers community"
          className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
          loading="lazy"
          src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
        />
        <Card.Header>
          <Card.Title className="text-start">মারথা নিপা</Card.Title>
          <Rating
            name="text-feedback"
            value={5}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Card.Description className="text-start line-clamp-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
            temporibus, velit ut deserunt laudantium asperiores est. Eaque
            consequatur perferendis architecto!
          </Card.Description>
        </Card.Header>
      </Card>
      <Card className="w-full gap-2 h-full">
        <img
          alt="Indie Hackers community"
          className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
          loading="lazy"
          src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
        />
        <Card.Header>
          <Card.Title className="text-start">মারথা নিপা</Card.Title>
          <Rating
            name="text-feedback"
            value={3.5}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Card.Description className="text-start line-clamp-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
            temporibus, velit ut deserunt laudantium asperiores est. Eaque
            consequatur perferendis architecto!
          </Card.Description>
        </Card.Header>
      </Card>
      <Card className="w-full gap-2 h-full">
        <img
          alt="Indie Hackers community"
          className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
          loading="lazy"
          src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
        />
        <Card.Header>
          <Card.Title className="text-start">মারথা নিপা</Card.Title>
          <Rating
            name="text-feedback"
            value={4.5}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Card.Description className="text-start line-clamp-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
            temporibus, velit ut deserunt laudantium asperiores est. Eaque
            consequatur perferendis architecto!
          </Card.Description>
        </Card.Header>
      </Card>
      <Card className="w-full gap-2 h-full">
        <img
          alt="Indie Hackers community"
          className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
          loading="lazy"
          src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
        />
        <Card.Header>
          <Card.Title className="text-start">মারথা নিপা</Card.Title>
          <Rating
            name="text-feedback"
            value={5}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Card.Description className="text-start line-clamp-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
            temporibus, velit ut deserunt laudantium asperiores est. Eaque
            consequatur perferendis architecto!
          </Card.Description>
        </Card.Header>
      </Card>
    </>
  );
  return (
    <div className="w-9/12 mx-auto mt-20 text-center">
      <h2 className="text-3xl font-bold text-sky-900">
        সহযোগী ব্যবহারকারীদের মন্তব্য
      </h2>
      <p className="font-bold text-gray-700">
        আপনার অভিযোগ এবং পরামর্শগুলি আমাদের জন্য অত্যন্ত মূল্যবান।
      </p>
      <Modal>
        <Button
          variant="primary"
          className="mt-4 bg-sky-950 rounded-lg px-4 py-2 text-white hover:bg-sky-800"
        >
          মন্তব্য করুন
          <FaCommentDots />
        </Button>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[360px]">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-default text-foreground">
                  <FaCommentDots />
                </Modal.Icon>
                <Modal.Heading>Welcome to HeroUI</Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                <p>
                  A beautiful, fast, and modern React UI library for building
                  accessible and customizable web applications with ease.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button className="w-full" slot="close">
                  Continue
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
      <div className="grid grid-cols-4 gap-4 mt-10">{cards}</div>
      <Link href="/testimonials">
        <Button variant="primary" className="mt-4 rounded-lg bg-sky-900">
          <FaHandPointRight />
          সকল মন্তব্য দেখুন
        </Button>
      </Link>
    </div>
  );
};

export default TestimonialSection;
