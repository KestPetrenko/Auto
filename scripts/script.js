let template = document.querySelector("#monthReport").innerHTML;

        class MonthReport {
            constructor(imagePath, model, month, engine, type, price) {
                this.imagePath = imagePath;
                this.model = model;
                this.month = month;
                this.engine = engine;
                this.type = type;
                this.price = price;
            }

            render(element) {
                let html = Mustache.render(template, this);
                element.insertAdjacentHTML("beforeend", html);
            }
        }

        let source = [
            new MonthReport("img/audi-a6-250.jpg", "Audi A6", 2011, "2.0", "Дизель", 18600),
            new MonthReport("img/jaguar-x-type-250.jpg", "Jaguar X-Type", 2008, "2.2", "Дизель", 17500),
            new MonthReport("img/porsche-carrera-911-250.jpg", "Porsce Carrera 911", 2011, "3.8", "Бензин", 61700),
        ];

        source.forEach(rep => rep.render(output));

        let source1 = [
            new MonthReport("img/escape.jpg", "Ford Escape", 2020, "1.5", "Бензин", 12800),
            new MonthReport("img/Avalon.jpg", "Toyota Avalon", 2014, "2.5", "Гибрид", 10500),
            new MonthReport("img/Qashqai.jpg", "Nissan Qashqai", 2017, "1.6", "Дизель", 9700),
        ];

        source1.forEach(rep => rep.render(output1));




        let template2 = document.querySelector("#monthReport2").innerHTML;

        class qwe extends MonthReport {

            constructor (imagePath, model, month, engine, type, text, price) {
                super(imagePath, model, month, engine, type, price);
                this.text = text;
            }

            render(e) {
                let html2 = Mustache.render(template2, this);
                e.insertAdjacentHTML("beforeend", html2);
            }
        }

        let source2 = [
            new qwe("img/volvo.jpg", "Volvo XC70", 2014, "3.2", "Бензин", "Нужен ремонт АКПП", 12800),
            new qwe("img/Rogue.jpg", "Nissan Rogue", 2018, "2.5", "Бензин", "Нужен ремонт АКПП", 9500),
            new qwe("img/Passat.jpg", "Volkswagen Passat B8", 2015, "1.6", "Дизель", "Нужен ремонт двигателя", 9700),
        ];

        source2.forEach(rep => rep.render(output2));