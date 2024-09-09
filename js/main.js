$(document).ready(function (){
    $(document).on("click", ".icon-box", function(){
        var parent = $(this).parent();

        $(this).addClass("active");
        $(parent).addClass("active");
    });

    function safeToLowerCase(value) {
        if (typeof value === 'string' && value.length > 0) {
            return value.toLowerCase();
        }
        return '';  // Return an empty string or handle it as needed
    }
    
    function numberToWord(number) {
        return numberToWordMap[number] || number;  // Return word or original number if no match
    }

    function load_star(star) {
        const $container = $('#star_container'); 

        $container.empty();

        $.each(star, function(i, star) {
            const starName = star.name;
            const $iconBox = $('<span>', { 
                class: `icon-box box-star`, 
                'data-star': numberToWord(starName) 
            });
            const $icon = $('<span>', { class: 'icon' });
            const $img = $('<img>', {
                src: `/images/icons/star.png`,
                alt: star.name 
            });

            $icon.append($img);
            $iconBox.append(star.name);
            $iconBox.append($icon);
            $container.append($iconBox);
        });
    }

    function load_classes(classes) {
        const $container = $('#classes_container'); 

        $container.empty();

        $.each(classes, function(i, classes) {
            const classesName = classes.name.replace(/\s+/g, '_').toLowerCase();
            const $iconBox = $('<span>', { 
                class: `icon-box box-classes`, 
                'data-classes': classesName 
            });
            const $icon = $('<span>', { class: 'icon' });
            const $img = $('<img>', {
                src: `/images/icons/${classesName}.png`,
                alt: classes.name 
            });

            $icon.append($img);
            $iconBox.append($icon);
            $iconBox.append(classes.name);
            $container.append($iconBox);
        });
    }

    function load_elements(element) {
        const $container = $('#element_container'); 

        $container.empty();

        $.each(element, function(i, element) {
            const elementName = element.name.replace(/\s+/g, '_');
            const $iconBox = $('<span>', { 
                class: `icon-box box-element`, 
                'data-element': elementName 
            });
            const $icon = $('<span>', { class: 'icon' });
            const $img = $('<img>', {
                src: `/images/icons/${elementName}.png`,
                alt: element.name 
            });

            $icon.append($img);
            $iconBox.append($icon);
            $iconBox.append(elementName);
            $container.append($iconBox);
        });
    }

    function load_buffs(buffs) {
        const $container = $('#buff_container'); 

        $container.empty();

        $.each(buffs, function(i, buff) {
            const buffName = buff.name.replace(/\s+/g, '_');
            const $iconBox = $('<span>', { 
                class: `icon-box box-buff`, 
                'data-buff': buffName.toLowerCase() 
            });
            const $icon = $('<span>', { class: 'icon' });
            const $img = $('<img>', {
                src: `/images/icons/${buffName}.png`,
                alt: buff.name 
            });

            $icon.append($img);
            $iconBox.append($icon);
            $container.append($iconBox);
        });
    }

    function load_debuffs(debuffs) {
        const $container = $('#debuff_container'); 

        $container.empty();

        $.each(debuffs, function(i, debuff) {
            const debuffName = debuff.name.replace(/\s+/g, '_');
            const $iconBox = $('<span>', { 
                class: `icon-box box-debuff`, 
                'data-debuff': debuffName.toLowerCase() 
            });
            const $icon = $('<span>', { class: 'icon' });
            const $img = $('<img>', {
                src: `/images/icons/${debuffName}.png`,
                alt: debuff.name 
            });

            $icon.append($img);
            $iconBox.append($icon);
            $container.append($iconBox);
        });
    }

    // function load_characters(characters) {
    //     const $container = $('#character_container'); 
    //     const $count = $('#character_count');
    
    //     $container.empty();
    
    //     characters.sort((a, b) => a.name.localeCompare(b.name));
    
    //     const uniqueCharacters = characters.filter((character, index, self) =>
    //         index === self.findIndex(c => c.name === character.name)
    //     );
    
    //     $count.text("Characters: " + uniqueCharacters.length);
    
    //     $.each(uniqueCharacters, function(i, character) {
    //         const characterName = character.name.replace(/\s+/g, '_');
    //         const $charBox = $('<div>', { class: safeToLowerCase(numberToWord(character.star)) + " " + character.role.replace(/\s+/g, '_').toLowerCase() + " " + character.element.toLowerCase() + ' char-box ' + character.trait.map(trait => trait.replace(/\s+/g, '_')).join(' ').toLowerCase() });
    //         // const $figure = $('<div>', { class: 'figure' });
    //         // const $img = $('<img>', {
    //         //     src: `/images/characters/${characterName}.png`,
    //         //     alt: characters.name 
    //         // });
    //         const $name = $('<div>', { class: 'name' });
    //         $name.append('<img src="/images/icons/' + character.element.toLowerCase() + '.png">');
    //         $name.append(character.name);
    //         // $figure.append($img);
    //         // $charBox.append($figure);
    //         // Create and append trait elements
    //         const $traits = $('<div>', { class: 'traits' });
    //         character.skills.forEach(trait => {
    //             if (skills) { // Check if trait is not an empty string
    //                 // $skills.append('<div class="trait"><img src="/images/icons/' + trait.replace(/\s+/g, '_') + '.png"><span>' + trait + '</span></div>');
    //             }
    //         });
    
    //         $charBox.append($name);
    //         $charBox.append($traits);
    //         $container.append($charBox);
    //     });
    // }

    function load_characters(characters) {
        const $container = $('#character_container');
        const $count = $('#character_count');
    
        $container.empty();
    
        characters.sort((a, b) => a.name.localeCompare(b.name));
        
        const uniqueCharacters = characters.filter((character, index, self) =>
            index === self.findIndex(c => c.name === character.name)
        );
        
        $count.html("Characters: " + uniqueCharacters.length + "<span style='margin-left: 10px'>Last updated: 9 September 2024</span>");
    
        $.each(uniqueCharacters, function(i, character) {
            // Print traits as classes for the character
            const allTraits = getAllTraits(character); // Get traits for this specific character
            const characterName = character.name.replace(/\s+/g, '_');
            const $charBox = $('<div>', { 
                class: `${safeToLowerCase(numberToWord(character.star))} ${character.role.replace(/\s+/g, '_').toLowerCase()} ${character.element.toLowerCase()} char-box ${allTraits}`
            });
    
            const $name = $('<div>', { class: 'name' });
            $name.append(`<img src="/images/icons/${character.role.replace(/\s+/g, '_').toLowerCase()}.png">`);
            $name.append(`<img src="/images/icons/${character.element.toLowerCase()}.png">`);
            $name.append(character.name);
    
            // Create and append skills
            const $skills = $('<div>', { class: 'skills' });
    
            // Iterate over skills and their traits
            $.each(character.skills, function(skillKey, skill) {
                const skillNumber = skillKey.split('_')[1]; // Extract number from skill key (s1, s2, s3)
                const $skillBox = $('<div>', { class: `skill s${skillNumber}` });
                
                const $skillName = $('<div>', { class: 'skill-name' }).text(skill.name || 'Unnamed Skill');
                const $skillNum = $('<span>', { class: 'skill-num' }).text(`Skill ${skillNumber}`);
                
                $skillBox.append($skillNum).append($skillName);
            
                // Create and append traits for the skill
                const $traits = $('<div>', { class: 'traits' });
                if (Array.isArray(skill.trait) && skill.trait.length > 0) {
                    $.each(skill.trait, function(index, trait) {
                        if (trait) {
                            $traits.append(`<div class="trait"><img src="/images/icons/${trait.replace(/\s+/g, '_')}.png"><span>${trait}</span></div>`);
                        }
                    });
                }
                $skillBox.append($traits);
                $skills.append($skillBox);
            });
    
            $charBox.append($name);
            $charBox.append($skills);
            $container.append($charBox);
        });
    }
    
    function getAllTraits(character) {
        // Use a Set to store unique traits
        const allTraitsSet = new Set();
    
        // Add character traits to the Set
        if (Array.isArray(character.trait)) {
            $.each(character.trait, function(i, trait) {
                allTraitsSet.add(trait);
            });
        }
    
        // Add skill traits to the Set
        $.each(character.skills, function(skillKey, skill) {
            if (Array.isArray(skill.trait)) {
                $.each(skill.trait, function(i, trait) {
                    allTraitsSet.add(trait);
                });
            }
        });
        
        // Convert Set to Array and sort
        const allTraits = Array.from(allTraitsSet).sort();
        return allTraits.map(trait => trait.replace(/\s+/g, '_')).join(' ').toLowerCase();
    }
       
    
    load_star(star);
    load_classes(classes);
    load_elements(element);
    load_buffs(buffs);
    load_debuffs(debuffs);
    load_characters(characters);

    const selectedElements = {
        star: [],
        classes: [],
        elements: [],
        buffs: [],
        debuffs: []
    };
    
    function updateCharBoxes() {
        const { star, classes, elements, buffs, debuffs } = selectedElements;
    
        // Jika tidak ada item yang dipilih, tampilkan semua character box dan hitung total
        if (star.length === 0 && classes.length === 0 && elements.length === 0 && buffs.length === 0 && debuffs.length === 0) {
            $('.char-box').fadeIn();
            $('#character_count').text("Characters: " + $('.char-box').length);
            $('.container').removeClass("active");
            return;
        }
    
        let visibleCount = 0;
    
        // Iterasi setiap .char-box
        $('.char-box').each(function() {
            const $charBox = $(this);
            const charBoxClasses = $charBox.attr('class').split(/\s+/);  // Split classes into an array
    
            // Pengecekan sesuai dengan selectedElements yang diaktifkan
            const matchesStar = star.length === 0 || star.some(item => charBoxClasses.includes(item));
            const matchesClasses = classes.length === 0 || classes.some(item => charBoxClasses.includes(item));
            const matchesElement = elements.length === 0 || elements.some(item => charBoxClasses.includes(item));
            const matchesBuff = buffs.length === 0 || buffs.some(item => charBoxClasses.includes(item));
            const matchesDebuff = debuffs.length === 0 || debuffs.some(item => charBoxClasses.includes(item));
            
            // Tampilkan atau sembunyikan .char-box jika semua kriteria cocok
            if (matchesStar && matchesClasses && matchesElement && matchesBuff && matchesDebuff) {
                $charBox.fadeIn();
                visibleCount++;
            } else {
                $charBox.fadeOut();
            }
        });
    
        $('#character_count').text("Characters: " + visibleCount);
    }
    
    function handleSelection($element, selectedArray, type) {
        const elementName = $element.data(type);  // Ensure data-type is correct
    
        if (selectedArray.includes(elementName)) {
            selectedArray.splice(selectedArray.indexOf(elementName), 1);  // Remove element from array
            $element.removeClass('active');
        } else {
            selectedArray.push(elementName);  // Add element to array
            $element.addClass('active');
        }
    
        updateCharBoxes();  // Update the visible character boxes
    }
    
    $(document).on('click', '.box-element, .box-buff, .box-debuff, .box-star, .box-classes', function() {
        const $this = $(this);
        
        // Handle clicks based on the type of box
        if ($this.hasClass('box-classes')) {
            handleSelection($this, selectedElements.classes, 'classes');  // Corrected classes selection
        } else if ($this.hasClass('box-element')) {
            handleSelection($this, selectedElements.elements, 'element');
        } else if ($this.hasClass('box-buff')) {
            handleSelection($this, selectedElements.buffs, 'buff');
        } else if ($this.hasClass('box-debuff')) {
            handleSelection($this, selectedElements.debuffs, 'debuff');
        } else if ($this.hasClass('box-star')) {
            handleSelection($this, selectedElements.star, 'star');
        }
    });
    
    $('#character_search').on('keyup', function() {
        var searchValue = $(this).val().toLowerCase().trim();
    
        $(this).addClass("active");
    
        if (searchValue.length <= 0) {
            $(this).removeClass("active");
            // Show all elements when the input is empty
            $('.char-box').show();
            return; // Exit the function since we don't need to filter anymore
        }
    
        // Split the input by commas and remove any empty strings
        var searchKeywords = searchValue.split(',').map(function(keyword) {
            return keyword.trim();
        }).filter(function(keyword) {
            return keyword.length > 0;
        });
    
        $('.char-box').each(function() {
            var charName = $(this).find('.name').text().toLowerCase();
            // Check if at least one keyword matches
            var match = searchKeywords.some(function(keyword) {
                return charName.includes(keyword);
            });
    
            if (match) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    
    $(document).on('click', '.filter', function(){
        $('.left-main').addClass("side-active");
        $('.close-button').addClass("close-button-active");
    });

    $(document).on('click', '.close-button', function(){
        $('.left-main').removeClass("side-active");
        $('.close-button').removeClass("close-button-active");
    });

});

