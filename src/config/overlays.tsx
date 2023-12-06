import sisalSquare from "./../assets/squares/sisal.png";
import webDevSquare from "./../assets/squares/webdev.png";
import mobileDevSquare from "./../assets/squares/mobiledev.png";
import videogamesSquare from "./../assets/squares/videogames.png";
import mlSquare from "./../assets/squares/machineLearning.png";

import profileIcon from "./../assets/icons/profileIcon.jpg";

import CodeIcon from "./../assets/icons/code.png";
import ReactIcon from "./../assets/icons/react.svg";
import JestIcon from "./../assets/icons/jest.png";
import StorybookIcon from "./../assets/icons/storybook.png";
import ToolsIcon from "./../assets/icons/tools.png";
import VSCodeIcon from "./../assets/icons/vscode.png";
import GitlabIcon from "./../assets/icons/gitlab.png";

import PacmanScreen from "./../assets/overlays/pacman.png";
import PogScreen from "./../assets/overlays/pog.png";

import SuperbonusMobile from "./../assets/overlays/superbonus-phoneMockup.png";
import SuperbonusDesktop from "./../assets/overlays/superbonus-pcMockup.png";
import GoGrandpaScreen from "./../assets/overlays/goGrandpa.jpg";
import KuffyScreen from "./../assets/overlays/kuffy.png";
import OltreScreen from "./../assets/overlays/oltre.png";
import NotesScreen from "./../assets/overlays/notes.png";

import NotesAppScreen1 from "./../assets/overlays/NotesApp1.jpg";
import NotesAppScreen2 from "./../assets/overlays/NotesApp2.jpg";
import NotesAppScreen3 from "./../assets/overlays/NotesApp3.jpg";
import NotesAppScreen4 from "./../assets/overlays/NotesApp4.jpg";

import DcGANScreen from "./../assets/overlays/dcgan.png";

import { Stack, Center, Flex, Text } from "@chakra-ui/react";

export const overlays = [
  {
    title: "Sisal",
    subtitle: "Currently working | React Developer",
    icon: sisalSquare,
    image: sisalSquare,
    working: true,
    workingImage: profileIcon,
    options: [
      {
        title: "Sisal",
        text: (
          <Stack w={"100%"}>
            <Text fontSize={"xl"} textAlign={"center"}>
              I'm currently working at Sisal as a React Developer.
            </Text>
            <br />
            <Center>
              <Stack>
                <Center>
                  <Flex w={"auto"} h={"2rem"} marginRight={"1rem"}>
                    <img src={CodeIcon} alt={"Code icon"} />
                  </Flex>
                  <Text fontSize={"4xl"}>My stack</Text>
                </Center>
                <Center>
                  <Flex w={"auto"} h={"2rem"}>
                    <img src={ReactIcon} alt={"React"} />
                  </Flex>
                  <Text fontSize={"lg"}>React</Text>
                </Center>
                <Center>
                  <Flex w={"auto"} h={"2rem"} marginRight={"0.5rem"}>
                    <img src={JestIcon} alt={"Jest"} />
                  </Flex>
                  <Text fontSize={"lg"}>Jest</Text>
                </Center>
                <Center>
                  <Flex w={"auto"} h={"2rem"} marginRight={"0.5rem"}>
                    <img src={StorybookIcon} alt={"Storybook"} />
                  </Flex>
                  <Text fontSize={"lg"}>Storybook</Text>
                </Center>
              </Stack>
            </Center>
            <Center paddingTop={"2rem"}>
              <Stack>
                <Center>
                  <Flex w={"auto"} h={"2rem"} marginRight={"1rem"}>
                    <img src={ToolsIcon} alt={"Tools icon"} />
                  </Flex>
                  <Text fontSize={"4xl"}>Tools</Text>
                </Center>
                <Center>
                  <Flex w={"auto"} h={"2rem"} marginRight={"0.5rem"}>
                    <img src={VSCodeIcon} alt={"VS Code"} />
                  </Flex>
                  <Text fontSize={"lg"}>VS Code</Text>
                </Center>
                <Center>
                  <Flex w={"auto"} h={"2rem"} marginRight={"0.5rem"}>
                    <img src={GitlabIcon} alt={"GitLab"} />
                  </Flex>
                  <Text fontSize={"lg"}>GitLab</Text>
                </Center>
              </Stack>
            </Center>
          </Stack>
        ),
      },
    ],
  },
  {
    title: "Web Projects",
    icon: webDevSquare,
    image: webDevSquare,
    options: [
      {
        title: "Teledolomiti",
        text: (
          <Text fontSize={"lg"} textAlign={"center"}>
            <strong>Teledolomiti</strong> is a webapp developed in{" "}
            <strong>NextJS</strong> (Typescript); it a streaming platform made
            of an italian broadcaster.
            <br />
            The code is not publically available, but the website can be
            accessed on{" "}
            <a href={"https://www.tele-dolomiti.it/"}>
              <strong>TeleDolomiti</strong>
            </a>
            .
          </Text>
        ),
        images: [SuperbonusMobile, SuperbonusDesktop],
      },
      {
        title: "Notes",
        text: (
          <Text fontSize={"lg"} textAlign={"center"}>
            <strong>Notes</strong> is a progressive webapp developed in{" "}
            <strong>React</strong> (Typescript) for writing, organizing and
            managing notes.
            <br />
            The code is available on{" "}
            <a href={"https://github.com/Felpat0/notes-pwa"}>
              <strong>GitHub</strong>
            </a>
            .
          </Text>
        ),
        images: [NotesScreen],
      },
      {
        title: "goGrandpa",
        text: (
          <>
            <div>
              <Text fontSize={"lg"} textAlign={"center"}>
                <strong>goGrandpa</strong> is an Android Application developed
                using <strong>Apache Cordova</strong> in <strong>HTML</strong>,{" "}
                <strong>CSS</strong> and <strong>Javascript</strong>.
                <br />
                The backend has been built using a <strong>
                  PHP server
                </strong>{" "}
                (which is also able to send emails) and a <strong>MySQL</strong>{" "}
                database.
                <br />
                <br />
                The app allows elderly persons to request services that are
                provided by younger users.
                <br />
                This project has been developed in team, I've built the backend
                and also worked on the Javascript part.
                <br />
                The code is available on{" "}
                <a href={"https://github.com/Felpat0/goGrandpa_local"}>
                  <strong>GitHub</strong>
                </a>
                .
              </Text>
            </div>
          </>
        ),
        images: [GoGrandpaScreen],
      },
      {
        title: "Kuffy",
        text: (
          <Text fontSize={"lg"} textAlign={"center"}>
            <strong>Kuffy</strong> is a management web-app developed in{" "}
            <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>Javascript</strong>, <strong>PHP</strong> and{" "}
            <strong>MySQL</strong>.
            <br />
            <br />
            The app is aimed to hotel managers that need to manage data about
            clients, available rooms, reservations etc...
            <br />
            This project has been developed in team, I've worked on both the
            frontend and the backend part and developed the interactive
            availability calendar.
            <br />
            The code is available on{" "}
            <a href={"https://github.com/andreeamiroslav/kuffy"}>
              <strong>GitHub</strong>
            </a>
            .
          </Text>
        ),
        images: [KuffyScreen],
      },
      {
        title: "OltreStore",
        text: (
          <Text fontSize={"lg"} textAlign={"center"}>
            <strong>OltreStore</strong> is a webapp developed in{" "}
            <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>Javascript</strong> and <strong>Python</strong> made for a
            European Project.
            <br />
            It allows users to explore data contained in a database in a simple
            way.
            <br />
            This project has been developed in team, I've worked in part of the
            frontend.
          </Text>
        ),
        images: [OltreScreen],
      },
    ],
  },
  {
    title: "Mobile Projects",
    icon: mobileDevSquare,
    image: mobileDevSquare,
    options: [
      {
        title: "Notes-app",
        text: (
          <Text fontSize={"lg"} textAlign={"center"}>
            <strong>Notes</strong> is an app developed in{" "}
            <strong>React Native</strong> (Typescript) for writing, organizing
            and managing notes and todos.
            <br />
            It also features a <strong>rich text editor</strong>, a{" "}
            <strong>recurrence system</strong> for notes and a{" "}
            <strong>Firebase backend</strong> that allows users to use the app
            both offline and online. The data is automatically synchronized when
            the device is online.
            <br />
            This app is being developed in substitution of "Notes" (the
            progressive webapp in the "Web Projects" section).
            <br />
            The code is available on{" "}
            <a href={"https://github.com/Felpat0/notes-app"}>
              <strong>GitHub</strong>
            </a>
            .
          </Text>
        ),
        images: [
          NotesAppScreen1,
          NotesAppScreen2,
          NotesAppScreen3,
          NotesAppScreen4,
        ],
      },
      {
        title: "goGrandpa",
        text: (
          <>
            <div>
              <Text fontSize={"lg"} textAlign={"center"}>
                <strong>goGrandpa</strong> is an Android Application developed
                using <strong>Apache Cordova</strong> in <strong>HTML</strong>,{" "}
                <strong>CSS</strong> and <strong>Javascript</strong>.
                <br />
                The backend has been built using a <strong>
                  PHP server
                </strong>{" "}
                (which is also able to send emails) and a <strong>MySQL</strong>{" "}
                database.
                <br />
                <br />
                The app allows elderly persons to request services that are
                provided by younger users.
                <br />
                This project has been developed in team, I've built the backend
                and also worked on the Javascript part.
                <br />
                The code is available on{" "}
                <a href={"https://github.com/Felpat0/goGrandpa_local"}>
                  <strong>GitHub</strong>
                </a>
                .
              </Text>
            </div>
          </>
        ),
        images: [GoGrandpaScreen],
      },
    ],
  },
  {
    title: "Videogames Projects",
    icon: videogamesSquare,
    image: videogamesSquare,
    options: [
      {
        title: "PacMan",
        text: (
          <>
            I remade the game <strong>PacMan</strong> in <strong>Java</strong>{" "}
            (using the library <strong>Java AWT</strong>).
            <br />
            In particular I've implemented PacMan's movement, collisions,
            enemies' AI and sound effects.
            <br />
            The code is available on{" "}
            <a href={"https://github.com/Felpat0/PacManJava"}>
              <strong>GitHub</strong>
            </a>
            .
          </>
        ),
        images: [PacmanScreen],
      },
      {
        title: "CMD Rogue-Like",
        text: (
          <>
            For a university project I've developed a{" "}
            <strong>Rogue-Like game</strong> in plain <strong>C++</strong>. The
            aim of the game is to exit from the dungeon without getting killed
            by the monsters that inhabit it.
            <br />
            Some of the implemented features are:
            <ul>
              <li>
                Random dungeon generation (with writing and reading on XML file)
              </li>
              <li>
                Items (like weapons, armors, potions, herbs) and spells (also
                area of effect spells)
              </li>
              <li>
                Possibility of creating custom classes, items and spells via XML
                file
              </li>
              <li>Fog of war</li>
              <li>
                Pathfinding alghorithm <strong>A*</strong>
              </li>
              <li>Turn-based game cycle</li>
            </ul>
            <br />
            The code is available on{" "}
            <a href={"https://github.com/Felpat0/POGproject"}>
              <strong>GitHub</strong>
            </a>
            .
          </>
        ),
        images: [PogScreen],
      },
    ],
  },
  {
    title: "ML Projects",
    icon: mlSquare,
    image: mlSquare,
    options: [
      {
        title: "Realistic images generation",
        text: (
          <Text fontSize={"lg"} textAlign={"center"} paddingTop={"1rem"}>
            I've implemented two machine learning models (
            <strong>Deep Convolutional Generative Adversarial Networks</strong>{" "}
            DCGAN and <strong>Variational Autoencoder</strong>) and the
            necessary data pipes for my bachelor degree thesis.
            <br /> The code was written in <strong>Python</strong> (using{" "}
            <strong>Tensorflow</strong>).
            <br />
            In particular I've loaded and normalized a dataset of 30.000 images
            (64x64x3) representing cats and I used the DCGAN and the VAE to
            generate new cats images (as shown in the image).
            <br />
            The codes of both models are available on{" "}
            <strong>Google Colab</strong>:{" "}
            <a
              href={
                "https://colab.research.google.com/drive/1ptOsWjPMioUstgsNc52muaUziCHt8w8R"
              }
            >
              <strong>DCGAN</strong>
            </a>
            ,{" "}
            <a
              href={
                "https://colab.research.google.com/drive/1r0AnmhJeruyCewAbr6etX4s-t7Na6UUd?usp=sharing"
              }
            >
              <strong>VAE</strong>
            </a>
            .
          </Text>
        ),
        images: [DcGANScreen],
      },
      {
        title: "Classification",
        text: (
          <Text fontSize={"lg"} textAlign={"center"} paddingTop={"2rem"}>
            I've built three classification models (
            <strong>Random Forest Classifier</strong>,{" "}
            <strong>Neural Network</strong> and{" "}
            <strong>K-Nearest Neighbours</strong>) to predict if a bank client
            is likely to close his bank account. <br />
            The code is written in <strong>Python</strong> (using{" "}
            <strong>Tensorflow</strong>).
            <br />
            The dataset has been extrapolated from an Excel file, then it has
            been prepared for the models. The maximum achieved accuracy is
            95.85% (and 0.91 AUC score).
            <br />
            The code is available on{" "}
            <a
              href={
                "https://colab.research.google.com/drive/17GeU5N5sxTow6AKW26QCRqRqmQSJPZYD?usp=sharing"
              }
            >
              <strong>Google Colab</strong>
            </a>
            .
          </Text>
        ),
      },
    ],
  },
];
