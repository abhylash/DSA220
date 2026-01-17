import React, { useState } from 'react';
import { CheckCircle2, Circle, ChevronDown, ChevronRight } from 'lucide-react';

const DSAProblems220 = () => {
  const [checkedProblems, setCheckedProblems] = useState({});
  const [expandedPatterns, setExpandedPatterns] = useState({});
  const [difficultyFilter, setDifficultyFilter] = useState([]);
  const [companyFilter, setCompanyFilter] = useState([]);

  const problemsData = {
    "Array": {
      "Two-Pointer": [
        { name: "Two Sum", difficulty: "Easy", companies: ["Amazon", "Google", "Facebook"] },
        { name: "Two Sum II", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Remove Duplicates from Sorted Array", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Facebook"] },
        { name: "3Sum", difficulty: "Medium", companies: ["Facebook", "Microsoft", "Morgan Stanley"] },
        { name: "Sort Colors", difficulty: "Medium", companies: ["Microsoft", "Flipkart", "Adobe"] },
        { name: "Move Zeroes", difficulty: "Easy", companies: ["Amazon", "Google", "Facebook"] },
        { name: "Container With Most Water", difficulty: "Medium", companies: ["Amazon", "Apple", "DE Shaw"] },
        { name: "Trapping Rain Water", difficulty: "Hard", companies: ["Google", "Goldman Sachs"] }
      ],
      "Sliding Window": [
        { name: "Maximum Sum Subarray of Size K", difficulty: "Easy", companies: ["Amazon", "Microsoft"] },
        { name: "Max Consecutive ones", difficulty: "Easy", companies: ["Amazon", "Google", "Paytm"] },
        { name: "Max Consecutive ones III", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"] },
        { name: "Subarray Product Less Than K", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Sliding Window Maximum", difficulty: "Hard", companies: ["Amazon", "Google", "DE Shaw"] },
        { name: "Subarray with k distinct integers", difficulty: "Hard", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Fruits Into Baskets", difficulty: "Medium", companies: ["Amazon", "Flipkart", "PhonePe"] },
        { name: "Minimum Size Subarray Sum", difficulty: "Medium", companies: ["Amazon", "Morgan Stanley", "Adobe"] }
      ],
      "Prefix Sum": [
        { name: "Find Pivot Index", difficulty: "Easy", companies: ["Amazon", "Paytm", "Morgan Stanley"] },
        { name: "Subarray Sum Equals K", difficulty: "Medium", companies: ["Facebook", "Amazon", "Goldman Sachs"] },
        { name: "Running Sum of 1d Array", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Google"] },
        { name: "Product of Array Except Self", difficulty: "Medium", companies: ["Amazon", "Facebook", "Flipkart"] },
        { name: "Continuous Subarray Sum", difficulty: "Medium", companies: ["Facebook", "DE Shaw"] },
        { name: "Subarray Sum Divisible by K", difficulty: "Medium", companies: ["Goldman Sachs", "Microsoft", "PayPal"] }
      ],
      "Kadane's Algorithm": [
        { name: "Maximum Subarray", difficulty: "Medium", companies: ["Flipkart", "Paytm", "PhonePe"] },
        { name: "Maximum Product Subarray", difficulty: "Medium", companies: ["Google", "Facebook", "Morgan Stanley"] },
        { name: "Maximum Sum Circular Subarray", difficulty: "Medium", companies: ["Amazon", "Google", "DE Shaw"] }
      ]
    },
    "Strings": {
      "Two-Pointer (Palindrome)": [
        { name: "Reverse a String", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Google"] },
        { name: "Valid Palindrome", difficulty: "Easy", companies: ["Amazon", "Goldman Sachs", "PayPal"] },
        { name: "Valid Palindrome II", difficulty: "Easy", companies: ["Microsoft", "Morgan Stanley", "PhonePe"] },
        { name: "Longest Palindromic Substring", difficulty: "Medium", companies: ["Google", "DE Shaw"] },
        { name: "Palindromic Substrings", difficulty: "Medium", companies: ["Amazon", "Adobe", "Flipkart"] }
      ],
      "Sliding Window": [
        { name: "Longest Nice Substring", difficulty: "Easy", companies: ["Google", "PayPal", "Flipkart"] },
        { name: "Longest Substring Without Repeating Characters", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Minimum Window Substring", difficulty: "Hard", companies: ["Microsoft", "Flipkart", "PhonePe"] },
        { name: "Find All Anagrams in a String", difficulty: "Medium", companies: ["Facebook", "PhonePe"] },
        { name: "Permutation in String", difficulty: "Medium", companies: ["Google", "Adobe"] }
      ]
    },
    "Binary Search": {
      "Classic Binary Search": [
        { name: "Binary Search", difficulty: "Easy", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Sqrt(x)", difficulty: "Easy", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Search Insert Position", difficulty: "Easy", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Search in Rotated Sorted Array", difficulty: "Medium", companies: ["Amazon", "Adobe"] },
        { name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", companies: ["Microsoft", "Apple", "Goldman Sachs"] },
        { name: "Find Peak Element", difficulty: "Medium", companies: ["Amazon", "Google"] }
      ],
      "Lower / Upper Bound": [
        { name: "First Bad Version", difficulty: "Easy", companies: ["Facebook", "Google", "Microsoft"] },
        { name: "Find First and Last Position of Element", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "First / Last Occurrence", difficulty: "Easy", companies: ["Amazon", "Adobe"] },
        { name: "Count Occurrences in Sorted Array", difficulty: "Easy", companies: ["Flipkart", "PhonePe", "Paytm"] }
      ],
      "Binary Search on Answers": [
        { name: "Split Array Largest Sum", difficulty: "Hard", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Koko Eating Bananas", difficulty: "Medium", companies: ["Flipkart", "Paytm"] },
        { name: "Capacity To Ship Packages Within D Days", difficulty: "Medium", companies: ["Amazon", "Adobe"] },
        { name: "Aggressive cows", difficulty: "Medium", companies: ["Flipkart", "Amazon"] }
      ],
      "Search in 2D Matrix": [
        { name: "Search a 2D Matrix", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Search a 2D Matrix II", difficulty: "Medium", companies: ["Microsoft", "Facebook", "Morgan Stanley"] }
      ]
    },
    "Stack": {
      "Monotonic Stack": [
        { name: "Next Greater Element I", difficulty: "Easy", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Daily Temperatures", difficulty: "Medium", companies: ["Flipkart", "Paytm"] },
        { name: "Largest Rectangle in Histogram", difficulty: "Hard", companies: ["Google", "PayPal", "DE Shaw"] },
        { name: "Maximal Rectangle", difficulty: "Hard", companies: ["Amazon", "Goldman Sachs"] }
      ],
      "Expression Evaluation": [
        { name: "Basic Calculator I", difficulty: "Hard", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Basic Calculator II", difficulty: "Medium", companies: ["Microsoft", "Facebook", "Morgan Stanley"] },
        { name: "Evaluate Reverse Polish Notation", difficulty: "Medium", companies: ["Amazon", "Adobe"] },
        { name: "Decode String", difficulty: "Medium", companies: ["Google", "PayPal"] }
      ],
      "Parenthesis & Scoring": [
        { name: "Valid Parentheses", difficulty: "Easy", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Longest Valid Parentheses", difficulty: "Hard", companies: ["Flipkart", "Paytm"] }
      ],
      "Stack-Based Design": [
        { name: "Min Stack", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Implement Queue using Stacks", difficulty: "Easy", companies: ["Flipkart", "Paytm"] },
        { name: "Implement Stack using Queues", difficulty: "Easy", companies: ["Amazon", "Adobe"] }
      ]
    },
    "Linked List": {
      "Basic Operations": [
        { name: "Search in Linked List", difficulty: "Easy", companies: ["Facebook", "DE Shaw", "Zomato"] },
        { name: "Delete Node in a Linked List", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Google"] },
        { name: "Design Linked List", difficulty: "Medium", companies: ["Amazon", "Facebook", "Goldman Sachs"] },
        { name: "Odd–Even Linked List", difficulty: "Medium", companies: ["Google", "PayPal"] }
      ],
      "Fast and Slow Pointers": [
        { name: "Middle of the Linked List", difficulty: "Easy", companies: ["DE Shaw", "Flipkart"] },
        { name: "Linked List Cycle", difficulty: "Easy", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Linked List Cycle II", difficulty: "Medium", companies: ["Microsoft", "Facebook", "Morgan Stanley"] },
        { name: "Remove Nth Node From End", difficulty: "Medium", companies: ["Google", "PayPal"] }
      ],
      "Reversal Pattern": [
        { name: "Reverse a Linked List", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Goldman Sachs"] },
        { name: "Reverse Linked List II", difficulty: "Medium", companies: ["DE Shaw", "Flipkart"] },
        { name: "Palindrome Linked List", difficulty: "Easy", companies: ["Amazon", "PhonePe", "Adobe"] },
        { name: "Reverse Nodes in k-Group", difficulty: "Hard", companies: ["Google", "Facebook", "Morgan Stanley"] },
        { name: "Rotate List", difficulty: "Medium", companies: ["Amazon", "Microsoft"] }
      ],
      "Merge / Sort": [
        { name: "Merge Two Sorted Lists", difficulty: "Easy", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Merge K Sorted Lists", difficulty: "Hard", companies: ["Microsoft", "Facebook", "DE Shaw"] },
        { name: "Sort List", difficulty: "Medium", companies: ["Flipkart", "Paytm", "Adobe"] },
        { name: "Reorder List", difficulty: "Medium", companies: ["Amazon", "PayPal", "Morgan Stanley"] }
      ],
      "Linked List + Stack": [
        { name: "Add Two Numbers", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Goldman Sachs"] },
        { name: "Add Two Numbers II", difficulty: "Medium", companies: ["Google", "Facebook", "DE Shaw"] }
      ]
    },
    "Double Linked List": {
      "Basic DLL Operations": [
        { name: "LRU Cache", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "LFU Cache", difficulty: "Hard", companies: ["Amazon", "Adobe"] }
      ]
    },
    "HashMap": {
      "Frequency Map": [
        { name: "Top K Frequent Elements", difficulty: "Medium", companies: ["Microsoft", "Facebook", "Morgan Stanley"] },
        { name: "Sort Characters By Frequency", difficulty: "Medium", companies: ["Flipkart", "Paytm"] }
      ],
      "Prefix-Sum with Map": [
        { name: "Subarray Sum Equals K", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Continuous Subarray Sum", difficulty: "Medium", companies: ["Google", "Morgan Stanley"] }
      ],
      "Sliding Window + HashMap": [
        { name: "Longest Substring Without Repeating Characters", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Minimum Window Substring", difficulty: "Hard", companies: ["Amazon", "Adobe"] },
        { name: "Longest Substring with At Most K Distinct Characters", difficulty: "Medium", companies: ["Flipkart", "Paytm"] }
      ]
    },
    "Heap": {
      "Top-K Elements": [
        { name: "Kth Largest Element in an Array", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Top K Frequent Elements", difficulty: "Medium", companies: ["Microsoft", "Facebook", "Morgan Stanley"] },
        { name: "Find Median from Data Stream", difficulty: "Hard", companies: ["Flipkart", "Paytm"] },
        { name: "Minimum Cost to Connect Ropes", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] }
      ],
      "Merge K Sorted": [
        { name: "Merge K Sorted Lists", difficulty: "Hard", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Find K Pairs with Smallest Sums", difficulty: "Medium", companies: ["Flipkart", "Paytm"] }
      ],
      "Heap with Sliding Window": [
        { name: "Sliding Window Maximum", difficulty: "Hard", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Task Scheduler", difficulty: "Medium", companies: ["Amazon", "Adobe"] }
      ]
    },
    "Recursion": {
      "Linear Recursion": [
        { name: "Fibonacci Number", difficulty: "Easy", companies: ["Amazon", "Adobe"] },
        { name: "Power of X", difficulty: "Medium", companies: ["Facebook", "LinkedIn"] }
      ],
      "Divide & Conquer": [
        { name: "Merge Sort", difficulty: "Medium", companies: ["Microsoft", "Goldman Sachs"] },
        { name: "Maximum Subarray", difficulty: "Medium", companies: ["Amazon", "Apple"] }
      ]
    },
    "Tree": {
      "DFS Traversals": [
        { name: "Inorder Traversal", difficulty: "Easy", companies: ["Amazon", "Paytm"] },
        { name: "Preorder Traversal", difficulty: "Easy", companies: ["Flipkart", "Paytm"] },
        { name: "Postorder Traversal", difficulty: "Easy", companies: ["Flipkart", "Paytm"] },
        { name: "Diameter of Binary Tree", difficulty: "Easy", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Maximum Depth of Binary Tree", difficulty: "Easy", companies: ["Flipkart", "Paytm"] },
        { name: "Binary Tree Maximum Path Sum", difficulty: "Hard", companies: ["Microsoft", "Facebook", "Morgan Stanley"] },
        { name: "Vertical Order Traversal", difficulty: "Medium", companies: ["Google", "Microsoft"] },
        { name: "Boundary Traversal of a Binary Tree", difficulty: "Medium", companies: ["Microsoft", "Amazon"] }
      ],
      "BFS / Level-Order": [
        { name: "Binary Tree Level Order Traversal", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Binary Tree Zigzag Level Order Traversal", difficulty: "Medium", companies: ["Microsoft", "Facebook", "Morgan Stanley"] },
        { name: "Binary Tree Right Side View", difficulty: "Medium", companies: ["Google", "Apple"] }
      ],
      "Lowest Common Ancestor": [
        { name: "Lowest Common Ancestor of Binary Tree", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] }
      ],
      "Serialization / Construction": [
        { name: "Serialize and Deserialize Binary Tree", difficulty: "Hard", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Flatten Binary Tree to Linked List", difficulty: "Medium", companies: ["Microsoft", "Facebook", "Morgan Stanley"] },
        { name: "Construct Binary Tree from Preorder & Inorder", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Google"] }
      ]
    },
    "Binary Search Tree": {
      "BST Operations": [
        { name: "Validate Binary Search Tree", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Insert into a BST", difficulty: "Medium", companies: ["Amazon", "Adobe"] },
        { name: "Delete Node in a BST", difficulty: "Medium", companies: ["Google", "Apple"] },
        { name: "Convert Sorted Array to BST", difficulty: "Easy", companies: ["Microsoft", "Facebook", "Morgan Stanley"] }
      ],
      "LCA & Range Queries": [
        { name: "Lowest Common Ancestor of BST", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] }
      ]
    },
    "Graph": {
      "BFS (Unweighted Path)": [
        { name: "01 Matrix", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Word Ladder", difficulty: "Hard", companies: ["Microsoft", "Facebook", "Morgan Stanley"] },
        { name: "Clone Graph", difficulty: "Medium", companies: ["Flipkart", "Paytm"] },
        { name: "Rotting Oranges", difficulty: "Medium", companies: ["Amazon", "Adobe"] },
        { name: "Shortest Path in Binary Matrix", difficulty: "Medium", companies: ["Google", "Apple"] }
      ],
      "DFS (Connectivity)": [
        { name: "Number of Islands", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "All paths from source to target", difficulty: "Medium", companies: ["Microsoft", "Facebook", "Morgan Stanley"] },
        { name: "Surrounded Regions", difficulty: "Medium", companies: ["Amazon", "Microsoft"] },
        { name: "Is Graph Bipartite", difficulty: "Medium", companies: ["Amazon", "Google", "Adobe"] },
        { name: "Directed Cycle Detection", difficulty: "Medium", companies: ["Amazon", "Microsoft"] },
        { name: "Bridges in Graph / Critical Connections", difficulty: "Hard", companies: ["Amazon", "Facebook", "Google"] }
      ],
      "Topological Sort": [
        { name: "Course Schedule", difficulty: "Medium", companies: ["Amazon", "Google", "Facebook"] },
        { name: "Course Schedule II", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Alien Dictionary", difficulty: "Hard", companies: ["Microsoft", "Facebook", "Morgan Stanley"] },
        { name: "Cycle Detection in Directed Graph", difficulty: "Medium", companies: ["Amazon", "Microsoft"] }
      ],
      "MST / Union-Find": [
        { name: "Number of Connected Components in Graph", difficulty: "Medium", companies: ["Microsoft", "Facebook", "Morgan Stanley"] },
        { name: "Redundant Connection", difficulty: "Medium", companies: ["Flipkart", "Paytm"] },
        { name: "Accounts Merge", difficulty: "Medium", companies: ["Amazon", "Microsoft"] }
      ],
      "Dijkstra (Weighted)": [
        { name: "Network Delay Time", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Cheapest Flights Within K Stops", difficulty: "Medium", companies: ["Microsoft", "Facebook", "Morgan Stanley"] },
        { name: "Path With Minimum Effort", difficulty: "Medium", companies: ["Flipkart", "Paytm"] }
      ]
    },
    "Backtracking": {
      "Choice-Based Backtracking": [
        { name: "Subsets", difficulty: "Medium", companies: ["Google", "Amazon", "Microsoft"] },
        { name: "Subsets II", difficulty: "Medium", companies: ["Amazon", "Adobe"] },
        { name: "Combination Sum", difficulty: "Medium", companies: ["Google", "Amazon", "Facebook"] },
        { name: "Combination Sum II", difficulty: "Medium", companies: ["Amazon", "Microsoft"] },
        { name: "Permutations", difficulty: "Medium", companies: ["Google", "Uber"] },
        { name: "Generate Parentheses", difficulty: "Medium", companies: ["Google", "Amazon", "Microsoft"] },
        { name: "Palindrome Partitioning", difficulty: "Medium", companies: ["Google", "Apple"] }
      ],
      "Constraint-Based Backtracking": [
        { name: "N-Queens", difficulty: "Hard", companies: ["Google", "Amazon", "Microsoft"] },
        { name: "Partition to K Equal Sum Subsets", difficulty: "Medium", companies: ["LinkedIn", "Google"] }
      ],
      "Grid / Path Backtracking": [
        { name: "Sudoku Solver", difficulty: "Hard", companies: ["Uber", "Google"] },
        { name: "Word Search II", difficulty: "Hard", companies: ["Microsoft", "Amazon"] },
        { name: "Path with Maximum Gold", difficulty: "Medium", companies: ["Amazon", "Google"] }
      ]
    },
    "Greedy": {
      "Intervals & Reach": [
        { name: "Merge Intervals", difficulty: "Medium", companies: ["Amazon", "PhonePe", "Goldman Sachs"] },
        { name: "Insert Interval", difficulty: "Medium", companies: ["Amazon", "Adobe", "Goldman Sachs"] },
        { name: "Non-overlapping Intervals", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Meeting Rooms II", difficulty: "Medium", companies: ["Flipkart", "Paytm"] },
        { name: "Jump Game", difficulty: "Medium", companies: ["Flipkart", "Paytm"] },
        { name: "Jump Game II", difficulty: "Medium", companies: ["Amazon", "Adobe"] }
      ],
      "Sorting / Local Choice": [
        { name: "Largest Number", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Partition Labels", difficulty: "Medium", companies: ["Flipkart", "Paytm"] },
        { name: "Task Scheduler", difficulty: "Medium", companies: ["Amazon", "Microsoft"] }
      ]
    },
    "Dynamic Programming": {
      "1D / Linear DP": [
        { name: "Climbing Stairs", difficulty: "Easy", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "House Robber", difficulty: "Medium", companies: ["Microsoft", "Facebook", "Morgan Stanley"] },
        { name: "Maximum Subarray", difficulty: "Medium", companies: ["Flipkart", "Paytm"] },
        { name: "Decode Ways", difficulty: "Medium", companies: ["Amazon", "Microsoft"] }
      ],
      "2D / Grid DP": [
        { name: "Unique Paths", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Unique Paths 2", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Minimum Path Sum", difficulty: "Medium", companies: ["Microsoft", "Facebook", "Morgan Stanley"] },
        { name: "Cherry Pickup", difficulty: "Hard", companies: ["Amazon", "Adobe"] }
      ],
      "DP on Strings": [
        { name: "Longest Common Subsequence", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Longest Palindromic Subsequence", difficulty: "Medium", companies: ["Microsoft", "Facebook", "Morgan Stanley"] },
        { name: "Edit Distance", difficulty: "Medium", companies: ["Flipkart", "Paytm"] },
        { name: "Regular Expression Matching", difficulty: "Hard", companies: ["Amazon", "Adobe"] },
        { name: "Distinct Subsequences", difficulty: "Hard", companies: ["Google", "Apple"] },
        { name: "Palindrome Partitioning II", difficulty: "Hard", companies: ["Amazon", "Microsoft"] }
      ],
      "DP on Intervals": [
        { name: "Matrix Chain Multiplication", difficulty: "Medium", companies: ["Microsoft", "Amazon", "Goldman Sachs"] },
        { name: "Burst Balloons", difficulty: "Hard", companies: ["Google", "Flipkart"] }
      ],
      "DP on Trees / DAGs": [
        { name: "House Robber III", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Binary Tree Maximum Path Sum", difficulty: "Hard", companies: ["Microsoft", "Facebook", "Morgan Stanley"] }
      ],
      "Knapsack / Subset Sum": [
        { name: "0-1 Knapsack", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"] },
        { name: "Partition Equal Subset Sum", difficulty: "Medium", companies: ["Microsoft", "Facebook", "Morgan Stanley"] },
        { name: "Coin Change", difficulty: "Medium", companies: ["Flipkart", "Paytm"] },
        { name: "Coin Change II", difficulty: "Medium", companies: ["Flipkart", "Paytm"] },
        { name: "Target Sum", difficulty: "Medium", companies: ["Amazon", "Adobe"] }
      ]
    },
    "Trie": {
      "Basic Trie Operations": [
        { name: "Implement Trie (Prefix Tree)", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"] },
        { name: "Add and Search Word", difficulty: "Medium", companies: ["Flipkart", "PhonePe"] },
        { name: "Search Suggestions System", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Google"] }
      ],
      "Word Break / Segmentation": [
        { name: "Word Break", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"] },
        { name: "Word Break 2", difficulty: "Hard", companies: ["Amazon", "Google", "Microsoft"] }
      ],
      "Bitwise Trie / XOR": [
        { name: "Maximum XOR of Two Numbers in Array", difficulty: "Medium", companies: ["Google", "Amazon", "Microsoft"] }
      ]
    },
    "Bit Manipulation": {
      "Basic Bit Operations": [
        { name: "Single Number", difficulty: "Easy", companies: ["Amazon", "Google", "Microsoft"] },
        { name: "Single Number II", difficulty: "Medium", companies: ["Flipkart", "PhonePe"] },
        { name: "Number of 1 Bits", difficulty: "Easy", companies: ["Amazon", "Paytm"] },
        { name: "Power of Two", difficulty: "Easy", companies: ["Amazon", "Google", "Microsoft"] }
      ],
      "Subsets / Bitmask": [
        { name: "Subsets", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"] }
      ],
      "Advanced XOR": [
        { name: "Maximum XOR of Two Numbers in Array", difficulty: "Medium", companies: ["Google", "Amazon", "Microsoft"] }
      ]
    }
  };

  const toggleProblem = (patternKey, subPatternKey, problemIndex) => {
    const key = `${patternKey}-${subPatternKey}-${problemIndex}`;
    setCheckedProblems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const togglePattern = (patternKey) => {
    setExpandedPatterns(prev => ({
      ...prev,
      [patternKey]: !prev[patternKey]
    }));
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'text-green-600 bg-green-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTotalProblems = () => {
    let total = 0;
    Object.values(problemsData).forEach(pattern => {
      Object.values(pattern).forEach(subPattern => {
        total += subPattern.length;
      });
    });
    return total;
  };

  const getCompletedProblems = () => {
    return Object.values(checkedProblems).filter(Boolean).length;
  };

  const toggleDifficultyFilter = (difficulty) => {
    setDifficultyFilter(prev => 
      prev.includes(difficulty) 
        ? prev.filter(d => d !== difficulty)
        : [...prev, difficulty]
    );
  };

  const toggleCompanyFilter = (company) => {
    setCompanyFilter(prev => 
      prev.includes(company) 
        ? prev.filter(c => c !== company)
        : [...prev, company]
    );
  };

  const filterProblems = (problems) => {
    return problems.filter(problem => {
      const difficultyMatch = difficultyFilter.length === 0 || difficultyFilter.includes(problem.difficulty);
      const companyMatch = companyFilter.length === 0 || problem.companies.some(c => companyFilter.includes(c));
      return difficultyMatch && companyMatch;
    });
  };

  const getAllCompanies = () => {
    const companies = new Set();
    Object.values(problemsData).forEach(pattern => {
      Object.values(pattern).forEach(subPattern => {
        subPattern.forEach(problem => {
          problem.companies.forEach(company => companies.add(company));
        });
      });
    });
    return Array.from(companies).sort();
  };

  const getPatternProgress = (patternKey) => {
    const pattern = problemsData[patternKey];
    let total = 0;
    let completed = 0;
    
    Object.keys(pattern).forEach(subPatternKey => {
      pattern[subPatternKey].forEach((_, index) => {
        total++;
        const key = `${patternKey}-${subPatternKey}-${index}`;
        if (checkedProblems[key]) completed++;
      });
    });
    
    return { completed, total };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">FAANG DSA 220 Problems</h1>
          <p className="text-gray-600 mb-4">Curated list of essential problems for FAANG interviews</p>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">Overall Progress</span>
              <span className="text-sm font-semibold text-gray-700">
                {getCompletedProblems()} / {getTotalProblems()}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(getCompletedProblems() / getTotalProblems()) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Filters</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
              <select
                multiple
                value={difficultyFilter}
                onChange={(e) => {
                  const selected = Array.from(e.target.selectedOptions, option => option.value);
                  setDifficultyFilter(selected);
                }}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 transition-all"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
            </div>

            {/* Company Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Companies</label>
              <select
                multiple
                value={companyFilter}
                onChange={(e) => {
                  const selected = Array.from(e.target.selectedOptions, option => option.value);
                  setCompanyFilter(selected);
                }}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 transition-all"
              >
                {getAllCompanies().map(company => (
                  <option key={company} value={company}>{company}</option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
            </div>
          </div>
        </div>

        {/* Problems List */}
        <div className="space-y-4">
          {Object.entries(problemsData).map(([patternKey, subPatterns]) => {
            const { completed, total } = getPatternProgress(patternKey);
            const isExpanded = expandedPatterns[patternKey];
            
            return (
              <div key={patternKey} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Pattern Header */}
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-4 cursor-pointer flex items-center justify-between hover:from-indigo-600 hover:to-blue-600 transition-all"
                  onClick={() => togglePattern(patternKey)}
                >
                  <div className="flex items-center space-x-3">
                    {isExpanded ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                    <h2 className="text-xl font-bold">{patternKey}</h2>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                      {completed} / {total}
                    </span>
                    <div className="w-32 bg-white bg-opacity-20 rounded-full h-2">
                      <div 
                        className="bg-white h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(completed / total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Sub-patterns */}
                {isExpanded && (
                  <div className="p-4">
                    {Object.entries(subPatterns).map(([subPatternKey, problems]) => {
                      const filteredProblems = filterProblems(problems);
                      
                      if (filteredProblems.length === 0) return null;
                      
                      return (
                        <div key={subPatternKey} className="mb-6 last:mb-0">
                          <h3 className="text-lg font-semibold text-gray-700 mb-3 border-b-2 border-indigo-200 pb-2">
                            {subPatternKey} ({filteredProblems.length})
                          </h3>
                          <div className="space-y-2">
                            {filteredProblems.map((problem, index) => {
                              const originalIndex = problems.indexOf(problem);
                              const problemKey = `${patternKey}-${subPatternKey}-${originalIndex}`;
                              const isChecked = checkedProblems[problemKey];
                              
                              return (
                                <div 
                                  key={index}
                                  className={`flex items-center p-3 rounded-lg border-2 transition-all cursor-pointer ${
                                    isChecked 
                                      ? 'border-green-400 bg-green-50' 
                                      : 'border-gray-200 bg-white hover:border-indigo-300'
                                  }`}
                                  onClick={() => toggleProblem(patternKey, subPatternKey, originalIndex)}
                                >
                                  <div className="flex-shrink-0 mr-3">
                                    {isChecked ? (
                                      <CheckCircle2 className="text-green-600" size={24} />
                                    ) : (
                                      <Circle className="text-gray-400" size={24} />
                                    )}
                                  </div>
                                  
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center space-x-3 mb-1">
                                      <h4 className={`font-medium ${isChecked ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                                        {problem.name}
                                      </h4>
                                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(problem.difficulty)}`}>
                                        {problem.difficulty}
                                      </span>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                      {problem.companies.slice(0, 3).map((company, idx) => (
                                        <span key={idx} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                                          {company}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DSAProblems220;