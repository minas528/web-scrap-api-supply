import requests
from bs4 import BeautifulSoup
import pandas as pd

baseUrl = "https://www.thewhiskyexchange.com"

headers = {
    'User-Agent':"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
    }

def ProductLinks():
    productlinks = []
    for x in range(1,5):
        r = requests.get(f'https://www.thewhiskyexchange.com/c/35/japanese-whisky?pg={x}#productlist-filter')
        soup = BeautifulSoup(r.content, 'lxml')


        productList = soup.find_all('div', class_='item')

        for item in productList:
            for link in item.find_all('a', href=True):
                productlinks.append(baseUrl + link['href'])

    return productlinks


def whiskyList(productlinks):
    whiskylist = []
# testlink = 'https://www.thewhiskyexchange.com/p/37325/suntory-torys-classic'
    for link in productlinks:
        r = requests.get(link, headers= headers)
        soup = BeautifulSoup(r.content,'lxml')
        name = soup.find('h1', class_='product-main__name').text.strip()
        
        
        try:
            rating_ = soup.find('div', class_='review-overview').text.strip()
            price = soup.find('p',class_='product-action__price').text.strip()
            rating = rating_[0]
            review = ''
            start = False
            for i in rating_:
                if i == '(':
                    start=True
                if start :
                    review+=i
        except:
            rating = 'no_rating'
        try:
            discription = soup.find('p',class_='product-main__description').text.strip()
        except:
            discription = 'no decsription'
            
        whisky = {
            'name': name,
            'discription':discription,
            'rating': rating,
            'price': price,
            'review':review
        }
        whiskylist.append(whisky)
        print('Saving: ', whisky['name'])
    return whiskylist
# pl = ProductLinks()
# wl = whiskyList(pl)


    

# df = pd.DataFrame(wl)
# print(df.head(15))

    
