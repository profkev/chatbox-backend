const natural = require('natural');
const fs = require('fs');

const trainModel = async () => {
    const classifier = new natural.BayesClassifier();

    // Cloud migration related questions
    classifier.addDocument('What is cloud migration?', 'Cloud migration is the process of moving data, applications, or other business elements to a cloud computing environment.');
    classifier.addDocument('How does cloud migration work?', 'Cloud migration involves moving data, applications, and workloads to a cloud environment.');
    classifier.addDocument('Why is cloud migration important?', 'Cloud migration is important because it offers scalability, cost efficiency, and better performance.');
    classifier.addDocument('What are the steps involved in cloud migration?', 'The steps involved in cloud migration include planning, choosing the right cloud provider, data migration, application migration, and testing.');
    classifier.addDocument('What are the benefits of cloud migration?', 'The benefits of cloud migration include cost savings, improved performance, scalability, and better security.');
    classifier.addDocument('What challenges can arise during cloud migration?', 'Challenges during cloud migration can include data security, downtime, data loss, and compatibility issues.');
    classifier.addDocument('What is a cloud migration strategy?', 'A cloud migration strategy is a plan that outlines how to move data, applications, and workloads to the cloud.');
    classifier.addDocument('What types of cloud migration are there?', 'The types of cloud migration include rehosting, replatforming, repurchasing, refactoring, retiring, and retaining.');
    classifier.addDocument('What is rehosting in cloud migration?', 'Rehosting, also known as "lift and shift," involves moving applications to the cloud without making any changes to them.');
    classifier.addDocument('What is replatforming in cloud migration?', 'Replatforming involves making some optimizations to applications during the migration process to take advantage of cloud capabilities.');
    classifier.addDocument('What is refactoring in cloud migration?', 'Refactoring involves re-architecting applications to be cloud-native, which may include changes to the codebase.');
    classifier.addDocument('What is a cloud migration assessment?', 'A cloud migration assessment involves evaluating the existing infrastructure and applications to develop a migration strategy.');
    classifier.addDocument('What are the common cloud service providers?', 'Common cloud service providers include Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and IBM Cloud.');
    classifier.addDocument('What is a hybrid cloud migration?', 'A hybrid cloud migration involves moving some workloads to the cloud while keeping others on-premises.');
    classifier.addDocument('What is a multi-cloud strategy?', 'A multi-cloud strategy involves using services from multiple cloud providers to avoid vendor lock-in and increase reliability.');
    classifier.addDocument('What tools are used for cloud migration?', 'Tools used for cloud migration include AWS Migration Hub, Azure Migrate, Google Cloud Migrate, and third-party tools like CloudEndure.');

    // Common greetings and small talk
    classifier.addDocument('Hello', 'Hi there! How can I assist you today?');
    classifier.addDocument('Hi', 'Hello! How can I help you?');
    classifier.addDocument('Hey', 'Hey! What can I do for you?');
    classifier.addDocument('Good morning', 'Good morning! How can I assist you?');
    classifier.addDocument('Good afternoon', 'Good afternoon! How can I help you?');
    classifier.addDocument('Good evening', 'Good evening! What can I do for you?');
    classifier.addDocument('How are you?', 'I am just a bot, but I am here to help you!');
    classifier.addDocument('What is your name?', 'I am a chatbot designed to assist you with cloud migration queries.');
    classifier.addDocument('Thank you', 'You\'re welcome! Is there anything else you need help with?');
    classifier.addDocument('Thanks', 'No problem! Let me know if there\'s anything else.');
    classifier.addDocument('Bye', 'Goodbye! Have a great day!');
    classifier.addDocument('See you', 'See you later!');

    // Add more documents as needed...

    classifier.train();

    classifier.save('model.json', (err, classifier) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Model trained and saved successfully.');
        }
    });
};

trainModel();
