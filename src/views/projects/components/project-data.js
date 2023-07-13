const data = [
  {
    name: 'amortization-system',
    description:
      'The Amortization System web page, built using Angular and backed by JSON-Server, provides a comprehensive platform for users, including administrators, to manage banks and bank-administrators. Administrators can effortlessly add banks and assign bank-administrators to each bank. Bank-administrators, in turn, have the authority to configure tax rates and monthly payment schedules for various loan options. This flexible system caters to different loan types, including the German and French amortization systems.',
    images: ['/amortizacion.png'],
    techs: [
      { icon: 'fa-brands fa-angular', name: 'Angular', color: 'text-red-500' },
      { icon: 'fa-solid fa-server', name: 'json-server', color: 'text-grey-500' }
    ],
    link: 'https://github.com/noesrichard/proyecto-economia'
  },
  {
    name: 'color-recognition',
    description:
      ' The project involves developing a real-time color recognition system using the webcam of a laptop. Implemented in MATLAB and utilizing machine learning techniques, the system accurately identifies and categorizes colors in images captured by the webcam. This project combines computer vision, machine learning, and MATLAB programming to create an efficient and reliable color recognition tool applicable in various domains such as image processing, computer graphics, and accessibility assistance.',
    images: ['color-recognition.png'],
    techs: [
      { icon: 'fa-solid fa-chart-area', name: 'MATLAB', color: 'text-orange-500' },
      { icon: 'fa-solid fa-eye', name: 'Computer Vision', color: 'text-blue-500' },
      { icon: 'fa-solid fa-laptop-code', name: 'Machine Learning', color: 'text-grey-500' }
    ],
    link: 'https://github.com/noesrichard/proyecto-inteligencia-artificial'
  },

  {
    name: 'mobile-panic-button',
    description:
      'This project is a Panic Button System designed to provide a safety mechanism for stores. The system consists of a desktop client developed with Electron and React, a mobile client, and a backend REST API developed with Spring Boot. The system allows an admin user to add stores, locate them on a Google Maps component, and assign a user to each store. The store owners can then log in using the assigned user credentials and trigger a panic alert to notify all other users, including the admin, through push notifications.',
    images: ['panic-button.png'],
    techs: [
      { icon: 'fa-solid fa-leaf', name: 'Spring Boot', color: 'text-green-500' },
      { icon: 'fa-brands fa-react', name: 'React', color: 'text-blue-500' },
      { icon: 'fa-solid fa-atom', name: 'Electron', color: 'text-blue-500' },
      { icon: 'fa-solid fa-database', name: 'MySQL', color: 'text-amber-500' }
    ],
    link: 'https://github.com/noesrichard/proyecto-distribuidas'
  },

  {
    name: 'warehouse-mobile-bar-code',
    description:
      'This project is an Inventory Management System designed to manage inventory items within a company. It consists of a desktop application developed in Java for validating the current states of the items, a mobile application developed in Android Java for identifying items using barcode scanning, a backend REST API developed in Python with Flask, and a MySQL database for data storage.',
    images: ['warehouse.png'],
    techs: [
      { icon: 'fa-solid fa-pepper-hot', name: 'Flask', color: 'text-gray-500' },
      { icon: 'fa-brands fa-java', name: 'Java', color: 'text-amber-400' },
      { icon: 'fa-brands fa-android', name: 'Java Android', color: 'text-green-500' }
    ],
    link: 'https://github.com/noesrichard/proyecto-agiles'
  },

  {
    name: '8-puzzle',
    description:
      ' The Python project aims to solve the 8-puzzle using the A* search algorithm. The 8-puzzle is a classic problem where a 3x3 grid contains eight tiles numbered from 1 to 8 and one empty tile. The goal is to rearrange the tiles from a given initial configuration to a desired target configuration. The A* search algorithm is a heuristic search algorithm that efficiently explores the search space by considering both the cost to reach a particular state and an estimated cost to reach the goal. In this project, the Python program will take an initial puzzle configuration as input and use the A* search algorithm to find the optimal solution, providing a sequence of moves required to solve the puzzle. The program will employ heuristics like the Manhattan distance or the number of misplaced tiles to guide the search towards the goal state. This project not only showcases the power of Python in solving complex problems but also highlights the efficiency and effectiveness of the A* search algorithm in finding optimal solutions.',
    images: ['8-puzzle.png'],
    techs: [
      { icon: 'fa-brands fa-python', name: 'Python', color: 'text-green-500' },
      { icon: 'fa-solid fa-brain', name: 'A.I.', color: 'text-pink-500' }
    ],
    link: 'https://github.com/noesrichard/8-puzzle'
  },

  {
    name: '8-queens',
    description:
      ' The Python project aims to tackle the famous 8 Queens Problem using genetic algorithms. The objective of the project is to find a solution to place eight queens on an 8x8 chessboard, ensuring that no two queens threaten each other. The genetic algorithm approach involves simulating an evolutionary process where a population of potential solutions (chessboard configurations) undergoes genetic operations such as selection, crossover, and mutation to evolve towards an optimal solution. The project will implement the genetic algorithm framework, including fitness evaluation, selection mechanisms, crossover strategies, and mutation operators, to efficiently search for valid solutions. Through the iterative process of generating and refining populations, the project will ultimately find a solution that satisfies all the constraints of the 8 Queens Problem.',
    images: ['8-queens.jpeg'],
    techs: [
      { icon: 'fa-brands fa-python', name: 'Python', color: 'text-blue-500' },
      { icon: 'fa-solid fa-brain', name: 'A.I.', color: 'text-pink-500' }
    ],
    link: 'https://github.com/noesrichard/8-queens'
  }
]

export default data
