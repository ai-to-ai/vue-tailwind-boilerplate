import moment from 'moment'


export const list = [
    {
        id:1, 
        url:'/', 
        title:'Analyses',
        children:[
            {
                id:1,
                url:'/',
                title:'Word Analysis',
                children:[
                    {
                        id:1,
                        url:'/',
                        title:'Correct Spelling'
                    },
                    {
                        id:2,
                        url:'/',
                        title:'Word Count'
                    },
                    {
                        id:3,
                        url:'/',
                        title:'Language Recognition'
                    },
                    {
                        id:4,
                        url:'/',
                        title:'Technical Language Recognition'
                    },
                    {
                        id:5,
                        url:'/',
                        title:'Inclusive Language Detection'
                    },
                    {
                        id:6,
                        url:'/',
                        title:'Subject Master'
                    },
                    {
                        id:7,
                        url:'/',
                        title:'Personal Information Detection'
                    },
                    {
                        id:8,
                        url:'/',
                        title:'Date Format Detection'
                    },
                    {
                        id:9,
                        url:'/',
                        title:'Named Entity Recognition'
                    },
                ]
            },
            {
                id:2,
                url:'/',
                title:'Pre-Translation Analysis',
                children:[
                    {
                        id:1,
                        url:'/',
                        title:'Ambiguous Meaning Detection'
                    },
                    {
                        id:2,
                        url:'/',
                        title:'Pre Trans Quality Assessment'
                    },
                    {
                        id:3,
                        url:'/',
                        title:'Non-Translatable Assessment'
                    },
                    {
                        id:4,
                        url:'/',
                        title:'Run All Translation Analyses'
                    }
                    
                ]
            },
            {
                id:3,
                url:'/',
                title:'Text Analysis',
                children:[
                    {
                        id:1,
                        url:'/',
                        title:'Estimate Flesch Score'
                    },
                    {
                        id:2,
                        url:'/',
                        title:'Reading level Recognition'
                    },
                    {
                        id:3,
                        url:'/',
                        title:'Sensitive Content Recognition'
                    },
                    {
                        id:4,
                        url:'/',
                        title:'Target Audience Recognition'
                    },
                    {
                        id:5,
                        url:'/',
                        title:'Tone Identification'
                    },
                    {
                        id:6,
                        url:'/',
                        title:'Sentiment Recognition'
                    }
                ]
            },
        ]
    },
    {
        id:2, 
        url:'/', 
        title:'Actions',
        children:[
            {
                id:1,
                url:'/',
                title:'Spelling and Formatting',
                children:[
                    {
                        id:1,
                        url:'/',
                        title:'Correct Spelling'
                    },
                    {
                        id:2,
                        url:'/',
                        title:'Strip Tags'
                    },
                    {
                        id:3,
                        url:'/',
                        title:'Standardize Date Formats',
                        children:[
                            {
                                id:1,
                                url:'/',
                                title:'MM/DD/YYYY'
                            },
                            {
                                id:2,
                                url:'/',
                                title:'DD/MM/YYYY'
                            },
                            {
                                id:3,
                                url:'/',
                                title:moment().format("dddd, Do of MMMM YYYY")
                            },
                            {
                                id:4,
                                url:'/',
                                placeholder:'Enter Date Format'
                            },
                        ]
                    },
                    {
                        id:4,
                        url:'/',
                        title:'Remove Ambiguity'
                    },
                ]
            },
            {
                id:2,
                url:'/',
                title:'Text Augmentation',
                children:[
                    {
                        id:1,
                        url:'/',
                        title:'Anomymize Content'
                    },
                    {
                        id:2,
                        url:'/',
                        title:'Summarize Content'
                    },
                    {
                        id:3,
                        url:'/',
                        title:'Change Length',
                        children:[
                            {
                                id:1,
                                url:'/',
                                title:'Shorten by ~25%'
                            },
                            {
                                id:2,
                                url:'/',
                                title:'Shorten by ~50%'
                            },
                            {
                                id:3,
                                url:'/',
                                title:'Lengthen by ~25%'
                            },
                            {
                                id:4,
                                url:'/',
                                title:'Lengthen by ~50%'
                            },
                            {
                                id:5,
                                url:'/',
                                placeholder:'Enter Word Length'
                            },
                        ]
                    },
                    {
                        id:4,
                        url:'/',
                        title:'Change Tone',
                        children:[
                            {
                                id:1,
                                url:'/',
                                title:'Formal Tone'
                            },
                            {
                                id:2,
                                url:'/',
                                title:'Informal Tone'
                            },
                            {
                                id:3,
                                url:'/',
                                title:'Pursuasive Tone'
                            },
                            {
                                id:4,
                                url:'/',
                                title:'Instructional Tone'
                            },
                            {
                                id:5,
                                url:'/',
                                title:'Descriptive Tone'
                            },
                            {
                                id:6,
                                url:'/',
                                placeholder:'Enter the Tone'
                            },

                        ]
                    },
                    {
                        id:5,
                        url:'/',
                        title:'Change Reading Level',
                        children:[
                            {
                                id:1,
                                url:'/',
                                title:'5th Grade'
                            },
                            {
                                id:2,
                                url:'/',
                                title:'8th Grade'
                            },
                            {
                                id:3,
                                url:'/',
                                title:'College Level'
                            },
                            {
                                id:4,
                                url:'/',
                                title:'Professional Level'
                            },
                        ]
                    },
                    {
                        id:6,
                        url:'/',
                        title:'Apply Inclusive Language'
                    },
                    {
                        id:7,
                        url:'/',
                        title:'Simplify Terminology'
                    },
                    {
                        id:8,
                        url:'/',
                        title:'Extract Terminology'
                    }
                ]
            },
            {
                id:3,
                url:'/',
                title:'Language-related Tasks',
                children:[
                    {
                        id:1,
                        url:'/',
                        title:'Translate into',
                        children:[
                            {
                                id:1,
                                url:'/',
                                placeholder:'Enter Language'
                            }
                        ]
                    },
                    {
                        id:2,
                        url:'/',
                        title:'Create Billingual Table',
                        children:[
                            {
                                id:1,
                                url:'/',
                                placeholder:'Enter Language'
                            }
                        ]
                    },
                    {
                        id:3,
                        url:'/',
                        title:'Create Billingual Term Table',
                        children:[
                            {
                                id:1,
                                url:'/',
                                placeholder:'Enter Language'
                            }
                        ]
                    },
                    {
                        id:4,
                        url:'/',
                        title:'Transcreate in',
                        children:[
                            {
                                id:1,
                                url:'/',
                                placeholder:'Enter Language'
                            }
                        ]
                    },
                    {
                        id:5,
                        url:'/',
                        title:'Apply Inclusive Language'
                    },
                    {
                        id:6,
                        url:'/',
                        title:'Simplify Terminology'
                    },
                    {
                        id:7,
                        url:'/',
                        title:'Extract Terminology'
                    }
                ]
            },
        ]
    },
    {
        id:3,
        url:'/', 
        title:'My Prompts',
        children:[
            {
                id:1,
                url:'/',
                title:'Manage My Prompts'
            }
        ]
    },
    {
        id:4, 
        url:'/', 
        title:'Export',
        children:[
            {
                id:1,
                url:'/',
                title:'Download in TXT',
            },
            {
                id:2,
                url:'/',
                title:'Download in HTML',
            },
            {
                id:3,
                url:'/',
                title:'Download in TMX',
            }
        ]
    }
]