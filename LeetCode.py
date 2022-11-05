
import pandas as pd
import requests
from bs4 import BeautifulSoup

final=pd.DataFrame()

for i in range(1,51):
    
    url='https://leetcode.com/problemset/all/?page={}'.format(i)
    webpage=requests.get(url).text
    soup=BeautifulSoup(webpage,'lxml')
    
    name=[]
    acceptance=[]
    difficulty=[]
    
    nameList=soup.find_all('a',class_='h-5')
    for ele in nameList:
        name.append(ele.text[3:])
    
    div=soup.find_all('div',class_='odd:bg-layer-1')
    for j in range(len(div)):
        acceptance.append(div[j].find_all('span')[0].text)
        difficulty.append(div[j].find_all('span')[1].text)
        
    d={"Name":name,"Acceptance Rate":acceptance,"Difficulty":difficulty}
    
    df=pd.DataFrame(d)
    final=final.append(df,ignore_index=True)

final.to_csv('leetcode.csv')