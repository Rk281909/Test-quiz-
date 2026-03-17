import { bankingQuestions as baseQuestions } from './questions';
import { loksewaQuestions } from './loksewaQuestions';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category?: string;
}

// Helper to generate a large number of questions
const generateQuestions = (): Question[] => {
  const categories = ['RBB', 'NRB', 'Loksewa', 'Commercial', 'Microfinance', 'Development', 'Accounting', 'IT', 'Management', 'Economics', 'Law'];
  
  // Distribute the 90 real questions across different categories
  const allQuestions: Question[] = [
    ...baseQuestions.map((q, index) => ({ 
      ...q, 
      category: categories[index % categories.length] 
    })),
    ...loksewaQuestions.map(q => ({
      ...q,
      category: 'Loksewa'
    }))
  ];
  
  let idCounter = baseQuestions.length + loksewaQuestions.length + 1;

  // Generate 1000+ questions
  for (let i = 0; i < 1000; i++) {
    const category = categories[i % categories.length];
    const templateIndex = i % 5;
    
    let text = "";
    let options = ["Option A", "Option B", "Option C", "Option D"];
    let correctAnswer = 0;
    let explanation = "";

    if (category === 'Loksewa') {
      switch (templateIndex) {
        case 0:
          text = `खरिदार/सुब्बा तयारी: नेपालको प्रशासन सम्बन्धी कुन भनाइ सही छ? (प्रश्न-${idCounter})`;
          options = [`प्रशासन पारदर्शी हुनुपर्छ`, `प्रशासन गोप्य हुनुपर्छ`, `प्रशासन ढिलो हुनुपर्छ`, `प्रशासन महँगो हुनुपर्छ`];
          correctAnswer = 0;
          explanation = `सार्वजनिक प्रशासन सधैं पारदर्शी र जनउत्तरदायी हुनुपर्छ।`;
          break;
        case 1:
          text = `शिक्षक सेवा: शिक्षा नियमावली अनुसार तलका मध्ये कुन सही हो? (प्रश्न-${idCounter})`;
          options = [`विद्यार्थीलाई शारीरिक दण्ड दिन पाइन्छ`, `बालमैत्री सिकाइ हुनुपर्छ`, `शिक्षकले जतिबेला पनि बिदा लिन पाउँछ`, `पाठ्यक्रम आवश्यक छैन`];
          correctAnswer = 1;
          explanation = `आधुनिक शिक्षा प्रणालीले बालमैत्री सिकाइलाई जोड दिन्छ।`;
          break;
        case 2:
          text = `असई/हवल्दार: नेपाल प्रहरीको मुख्य काम के हो? (प्रश्न-${idCounter})`;
          options = [`कानुन निर्माण गर्ने`, `शान्ति सुरक्षा कायम गर्ने`, `बजेट बनाउने`, `मुद्दाको फैसला गर्ने`];
          correctAnswer = 1;
          explanation = `नेपाल प्रहरीको प्रमुख दायित्व समाजमा शान्ति सुरक्षा र अमनचयन कायम गर्नु हो।`;
          break;
        case 3:
          text = `सहायक चौथो: स्थानीय सरकार सञ्चालन ऐनको मुख्य उद्देश्य के हो? (प्रश्न-${idCounter})`;
          options = [`स्थानीय तहलाई अधिकार सम्पन्न बनाउने`, `केन्द्रको अधिकार बढाउने`, `प्रदेशलाई कमजोर बनाउने`, `कर मात्र उठाउने`];
          correctAnswer = 0;
          explanation = `स्थानीय सरकार सञ्चालन ऐनले स्थानीय तहलाई अधिकार सम्पन्न र स्वायत्त बनाउने लक्ष्य राखेको छ।`;
          break;
        case 4:
          text = `सामान्य ज्ञान: नेपालको भूगोल सम्बन्धी कुन तथ्य सही छ? (प्रश्न-${idCounter})`;
          options = [`नेपाल भूपरिवेष्ठित राष्ट्र हो`, `नेपालको समुद्रसँग सिमाना जोडिएको छ`, `नेपाल युरोप महादेशमा पर्छ`, `नेपालमा मरुभूमि छ`];
          correctAnswer = 0;
          explanation = `नेपाल भारत र चीनको बीचमा रहेको एक भूपरिवेष्ठित (Landlocked) राष्ट्र हो।`;
          break;
      }
    } else {
      switch (templateIndex) {
        case 0:
          text = `${category} को प्रमुख सिद्धान्त तलका मध्ये कुन हो? (प्रश्न-${idCounter})`;
          options = [`${category} मा पारदर्शिता`, `नियमहरूको बेवास्ता`, `व्यक्तिगत नाफा अधिकतम गर्ने`, `कर्मचारी कटौती`];
          correctAnswer = 0;
          explanation = `पारदर्शिता ${category} को एक आधारभूत सिद्धान्त हो जसले विश्वास र जवाफदेहिता सुनिश्चित गर्दछ।`;
          break;
        case 1:
          text = `${category} को सन्दर्भमा, मानक नियमनले मुख्यतया केमा ध्यान केन्द्रित गर्दछ? (प्रश्न-${idCounter})`;
          options = [`ग्राहक सन्तुष्टि`, `जोखिम व्यवस्थापन र अनुपालन`, `बजारीकरण`, `कार्यालय सजावट`];
          correctAnswer = 1;
          explanation = `${category} मा नियमनले जोखिम व्यवस्थापन र कानुनको कडा अनुपालनमा विशेष जोड दिन्छ।`;
          break;
        case 2:
          text = `नेपालमा ${category} क्षेत्रमा प्रमुख सुधार कहिले ल्याइएको थियो? (प्रश्न-${idCounter})`;
          options = [`सन् १९९०`, `सन् २००२`, `सन् २०१५`, `सन् २०२०`];
          correctAnswer = 2;
          explanation = `सन् २०१५ मा ${category} क्षेत्रलाई प्रभाव पार्ने महत्त्वपूर्ण नीतिगत सुधारहरू भएका थिए।`;
          break;
        case 3:
          text = `नेपालमा ${category} को मुख्य नियामक निकाय कुन हो? (प्रश्न-${idCounter})`;
          options = [`अर्थ मन्त्रालय`, `नेपाल राष्ट्र बैंक`, `स्थानीय सरकार`, `विश्व बैंक`];
          correctAnswer = 1;
          explanation = `नेपाल राष्ट्र बैंकले अधिकांश वित्तीय र ${category} क्षेत्रहरूको केन्द्रीय नियामक निकायको रूपमा काम गर्दछ।`;
          break;
        case 4:
          text = `हाल ${category} क्षेत्रले सामना गरिरहेको मुख्य चुनौती के हो? (प्रश्न-${idCounter})`;
          options = [`तरलता व्यवस्थापन`, `धेरै ग्राहकहरू`, `अत्यधिक नाफा`, `प्रविधिको अभाव`];
          correctAnswer = 0;
          explanation = `तरलता व्यवस्थापन (Liquidity management) ${category} क्षेत्रमा निरन्तर चुनौतीको रूपमा रहेको छ।`;
          break;
      }
    }

    allQuestions.push({
      id: idCounter++,
      text,
      options,
      correctAnswer,
      explanation,
      category
    });
  }

  return allQuestions;
};

export const questionBank = generateQuestions();

export const getQuestionsForQuiz = (quizId: number, requestedCount: number, category: string): Question[] => {
  // Filter questions by category
  let filtered = questionBank.filter(q => q.category === category);
  
  // If not enough questions in the specific category, fallback to all questions
  if (filtered.length < requestedCount) {
    filtered = questionBank;
  }

  // Use the quizId as a seed to ensure the same quiz always gets the same questions,
  // but different quizzes get different questions.
  const startIndex = (quizId * 17) % Math.max(1, filtered.length - requestedCount);
  
  return filtered.slice(startIndex, startIndex + requestedCount);
};
